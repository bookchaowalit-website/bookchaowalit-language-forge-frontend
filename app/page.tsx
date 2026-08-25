"use client";

import { useState } from "react";

type Phrase = { id: string; thai: string; roman: string; meaning: string; part: string; example: string; prompt: string; answers: string[]; correct: number };

const phrases: Phrase[] = [
  { id: "calm", thai: "ใจเย็น", roman: "jai yen", meaning: "stay calm", part: "phrase / gentle", example: "ใจเย็นก่อน แล้วค่อยดูอีกครั้ง", prompt: "Which meaning belongs to this phrase?", answers: ["stay calm", "take a seat", "look around"], correct: 0 },
  { id: "notice", thai: "สังเกต", roman: "sǎng-gèt", meaning: "to notice", part: "verb / attentive", example: "ลองสังเกตเสียงท้ายคำ", prompt: "What are you doing when you sǎng-gèt?", answers: ["to notice", "to forget", "to carry"], correct: 0 },
  { id: "enough", thai: "พอแล้ว", roman: "phɔɔ láew", meaning: "that is enough", part: "phrase / boundary", example: "วันนี้ฝึกเท่านี้พอแล้ว", prompt: "Which line sets a gentle boundary?", answers: ["that is enough", "see you tomorrow", "let us begin"], correct: 0 },
  { id: "together", thai: "ด้วยกัน", roman: "dûay-kan", meaning: "together", part: "adverb / shared", example: "เราลองอ่านประโยคนี้ด้วยกัน", prompt: "What does dûay-kan describe?", answers: ["together", "quickly", "quietly"], correct: 0 },
];

export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const phrase = phrases[phraseIndex];
  const choosePhrase = (index: number) => { setPhraseIndex(index); setAnswer(null); setSubmitted(false); };
  const nextPhrase = () => choosePhrase((phraseIndex + 1) % phrases.length);

  return (
    <main className="forge-page">
      <div className="forge-shell">
        <header className="forge-header"><a className="forge-brand" href="#practice" aria-label="Language Forge home"><span className="forge-mark">LF</span><span>LANGUAGE FORGE</span></a><nav aria-label="Practice sections"><a href="#bank">PHRASE BANK</a><a href="#practice">PRACTICE</a><a href="#notes">NOTES</a></nav><span className="forge-session">SESSION / 08 MIN</span></header>
        <section className="forge-intro" id="practice"><div><h1>Make a phrase<br /><em>stay with you.</em></h1><p>One small language desk for looking closely, saying it out loud, and using the phrase before it slips away.</p></div><div className="forge-intro-note"><span>WORKING SET</span><strong>TH / EN</strong><small>4 phrases · illustrative content</small></div></section>
        <section className="forge-workspace">
          <aside className="forge-bank" id="bank"><div className="forge-label"><span>PHRASE BANK</span><span>{phrases.length} / 04</span></div><p className="forge-aside-copy">Choose a phrase to open its sound, meaning, and use.</p><div className="phrase-list">{phrases.map((item, index) => <button key={item.id} type="button" className={index === phraseIndex ? "phrase-row is-active" : "phrase-row"} onClick={() => choosePhrase(index)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.thai}</strong><small>{item.meaning}</small><b>{index === phraseIndex ? "OPEN" : "VIEW"}</b></button>)}</div></aside>
          <section className="forge-card" aria-labelledby="phrase-title"><div className="forge-card-top"><span>OPEN PHRASE / {String(phraseIndex + 1).padStart(2, "0")}</span><span>{submitted ? "ANSWER RECORDED" : "LISTEN · READ · USE"}</span></div><div className="phrase-main"><div className="phrase-word"><span>THAI</span><h2 id="phrase-title">{phrase.thai}</h2><p>{phrase.roman}</p></div><div className="phrase-meaning"><span>{phrase.part}</span><strong>{phrase.meaning}</strong></div></div><div className="phrase-example"><span>IN A LINE</span><blockquote>“{phrase.example}”</blockquote><small>Read once for shape. Read once for intent.</small></div><div className="answer-zone"><p>{phrase.prompt}</p><div className="answer-options">{phrase.answers.map((item, index) => <button key={item} type="button" className={answer === index ? "answer-option is-picked" : "answer-option"} aria-pressed={answer === index} onClick={() => { setAnswer(index); setSubmitted(false); }}><span>{String.fromCharCode(65 + index)}</span>{item}</button>)}</div><div className="answer-actions"><button type="button" className="forge-primary" disabled={answer === null} onClick={() => setSubmitted(true)}>Check phrase</button><button type="button" className="forge-text-button" onClick={nextPhrase}>Next phrase <span aria-hidden="true">→</span></button></div>{submitted && <p className={answer === phrase.correct ? "forge-feedback is-right" : "forge-feedback is-wrong"} role="status">{answer === phrase.correct ? "Good read — this one is ready to use." : `Not quite. The useful meaning here is “${phrase.meaning}”.`}</p>}</div></section>
          <aside className="forge-notes" id="notes"><div className="forge-label"><span>SESSION MAP</span><span>01 / 03</span></div><div className="session-count"><strong>{String(phraseIndex + 1).padStart(2, "0")}</strong><span>of {String(phrases.length).padStart(2, "0")} phrases open</span></div><div className="session-line"><span style={{ transform: `scaleX(${(phraseIndex + 1) / phrases.length})` }} /></div><ol className="forge-stages"><li className="is-done"><span>01</span><div><strong>Look</strong><small>shape + sound</small></div></li><li className="is-current"><span>02</span><div><strong>Choose</strong><small>meaning in context</small></div></li><li><span>03</span><div><strong>Use</strong><small>make it yours</small></div></li></ol><div className="forge-note"><span>FIELD NOTE</span><p>Say the phrase before checking the English. A little uncertainty is part of the memory.</p></div><button type="button" className="forge-reset" onClick={() => choosePhrase(0)}>Reset session</button></aside>
        </section>
        <footer className="forge-footer"><span>LANGUAGE FORGE / PRACTICE DESK</span><span>ILLUSTRATIVE CONTENT · NO LIVE TRANSLATION</span></footer>
      </div>
    </main>
  );
}
