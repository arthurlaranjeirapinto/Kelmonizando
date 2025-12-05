import React, { useState } from 'react';

// Kelmonizando - Single-file React component
// TailwindCSS utility classes assumed available in the host project.

export default function KelmonizandoSite() {
  const [code, setCode] = useState('');
  const [checked, setChecked] = useState(null); // null = untouched, true = valid, false = invalid

  const validCode = '666KKKJOTROY';

  function handleCheckCode(e) {
    e.preventDefault();
    if (!code) return setChecked(false);
    if (code.trim() === validCode) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 antialiased">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold">K</div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Kelmonizando</h1>
            <p className="text-sm text-amber-300">seja um verdadeiro malankara peruano!</p>
          </div>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#rituais" className="hover:underline">Rituais</a>
          <a href="#catedral" className="hover:underline">Passeio</a>
          
          <a href="#produto" className="hover:underline">Produto</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section className="grid md:grid-cols-2 gap-8 items-center py-10">
          <div>
            <h2 className="text-3xl font-bold">Purificação espiritual com Padre Kelmon</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">Kelmonizando é um projeto para adultos (30–77 anos) liderado pelo Padre Kelmon — um caminho contemporâneo de rituais, estudos e encontros para reencontrar calma, sentido e comunidade. Nossas propostas misturam tradição, música contemplativa, estudos antigos e práticas de liberação simbólica.</p>

            <div className="mt-6 space-y-3">
              <p className="text-sm text-gray-400">Líder: <strong>Padre Kelmon</strong></p>
              <p className="text-sm text-gray-400">Idade-alvo: <strong>30 a 77 anos</strong></p>
              <p className="text-sm text-gray-400">Sede: encontros presenciais e roteiros virtuais.</p>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-amber-400 text-black font-semibold">Participar</button>
              <button className="px-4 py-2 rounded-lg border border-white/10">Saiba mais</button>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-xl">Próximo encontro</h3>
            <p className="text-gray-300 mt-2">Sessão especial de 7/12 à 25/12 — Natal com Padre Kelmon.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-4 bg-white/3 rounded">Encontros diários</div>
              <div className="p-4 bg-white/3 rounded">Rituais guiados</div>
              <div className="p-4 bg-white/3 rounded">Workshops</div>
              <div className="p-4 bg-white/3 rounded">Visitas</div>
            </div>
          </div>
        </section>

        <section id="rituais" className="mt-12">
          <h2 className="text-2xl font-bold">Rituais centrais</h2>
          <p className="text-gray-400 mt-2">Cada ritual é pensado para adultos, com atenção à simbologia, consentimento, e um guia claro conduzido pelo Padre Kelmon.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <article className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-semibold">Qual é o seu demônio?</h3>
              <p className="mt-2 text-sm text-gray-300">Ritual introspectivo para identificar e nomear padrões que impedem o bem-estar. Utiliza escrita guiada, meditação e arte simbólica.</p>
            </article>

            <article className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-semibold">Pentagramas — tire eles de você</h3>
              <p className="mt-2 text-sm text-gray-300">Prática simbólica para desapego de símbolos ou crenças que não servem mais, com cantos e gestos ritualizados.</p>
            </article>

            <article className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-semibold">A Bíblia sagrada em Quechua e Sânscrito</h3>
              <p className="mt-2 text-sm text-gray-300">Estudo comparado de textos sagrados (trechos traduzidos), explorando sentidos comuns e diversidade das tradições.</p>
            </article>
          </div>
        </section>

        <section id="catedral" className="mt-12">
          <h2 className="text-2xl font-bold">Passeio pela Catedral de São Pedro de Alcântara</h2>
          <p className="text-gray-400 mt-2">Visitas guiadas (presenciais) com fotografias e momentos para bênçãos simbólicas e encontro com a comunidade — opcionalmente, fotos com fãs do projeto.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-4 rounded">Tour histórico</div>
            <div className="bg-white/5 p-4 rounded">Sessão de fotos</div>
            <div className="bg-white/5 p-4 rounded">Pausa contemplativa</div>
          </div>
        </section>

        

        <section id="produto" className="mt-12 bg-white/3 p-6 rounded-lg">
          <h2 className="text-2xl font-bold">Verifique seu código de produto</h2>
          <p className="text-gray-300 mt-2">Insira seu código para verificar giftcards e confirmações de presença. (Campo sensível — use com cuidado.)</p>

          <form onSubmit={handleCheckCode} className="mt-4 flex flex-col md:flex-row gap-3 items-start">
            <label htmlFor="productCode" className="sr-only">Código do produto</label>
            <input
              id="productCode"
              aria-label="Código do produto Kelmonizando"
              className="w-full md:w-1/2 p-3 rounded bg-black/50 border border-white/10 focus:outline-none"
              placeholder="Insira o código do produto"
              value={code}
              onChange={(e) => { setCode(e.target.value); setChecked(null); }}
            />
            <button type="submit" className="px-4 py-2 rounded bg-amber-400 text-black font-semibold">Verificar</button>
          </form>

          <div className="mt-4">
            {checked === true && (
              <div className="p-4 rounded bg-green-900/40 border border-green-700">
                <h4 className="font-bold">Giftcard encontrado</h4>
                <p className="mt-2">Valor: <strong>79,000 Dólares Kelmonianos</strong></p>
                <p className="mt-1">Presença confirmada no Kelmonizando nos dias <strong>7/12 à 25/12</strong>.</p>
                <p className="mt-2"><em>Mensagem:</em> Jorge, Venha passar o natal com o Kelmon!!!</p>
              </div>
            )}

            {checked === false && (
              <div className="p-4 rounded bg-red-900/30 border border-red-700">
                <p className="font-semibold">Produto não válido</p>
              </div>
            )}

            {checked === null && (
              <div className="p-3 text-sm text-gray-400">Nenhuma verificação realizada.</div>
            )}
          </div>
        </section>

        <footer className="mt-16 border-t border-white/5 pt-8 pb-16 text-sm text-gray-400">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <p className="font-semibold">Kelmonizando</p>
              <p className="mt-1">Liderado por Padre Kelmon — contato e agendamento por email: <span className="underline">contato@kelmonizando.org</span></p>
            </div>

            <div>
              <p className="font-semibold">Avisos</p>
              <ul className="mt-2 space-y-1">
                <li>Rituais simbólicos — responsabilidade emocional dos participantes.</li>
                <li>Respeito às crenças diversas e consentimento em todas as práticas.</li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
