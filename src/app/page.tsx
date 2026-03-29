"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-500">
      {children}
    </p>
  );
}

function Callout({
  icon,
  children,
  color = "blue",
}: {
  icon: string;
  children: React.ReactNode;
  color?: "blue" | "green" | "amber" | "rose";
}) {
  const palette = {
    blue:  "bg-brand-50  border-brand-400 text-ink-800",
    green: "bg-emerald-50 border-emerald-500 text-ink-800",
    amber: "bg-amber-50  border-amber-500  text-ink-800",
    rose:  "bg-rose-50   border-rose-500   text-ink-800",
  };
  return (
    <div className={`flex gap-3 rounded-xl border-l-4 p-4 text-sm leading-relaxed ${palette[color]}`}>
      <span className="mt-0.5 text-xl">{icon}</span>
      <div>{children}</div>
    </div>
  );
}

function ChartCard({
  title,
  caption,
  src,
  alt,
  wide = false,
}: {
  title: string;
  caption?: string;
  src: string;
  alt: string;
  wide?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
      <div className={`px-6 pt-6 ${wide ? "" : "flex justify-center"}`}>
        <Image
          src={src}
          alt={alt}
          width={wide ? 900 : 700}
          height={wide ? 380 : 340}
          className="w-full rounded-lg object-contain"
          priority
        />
      </div>
      <figcaption className="px-6 py-4">
        <p className="text-sm font-semibold text-ink-800">{title}</p>
        {caption && <p className="mt-1 text-xs leading-relaxed text-ink-500">{caption}</p>}
      </figcaption>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Polarization bar chart (accessible summary)
// ---------------------------------------------------------------------------

function PolarizationBars() {
  const groups = [
    { label: "Eleitores de Lula",       pct: 75, color: "#2563eb" },
    { label: "Média geral",              pct: 57, color: "#6b7280" },
    { label: "Eleitores de Bolsonaro",   pct: 26, color: "#e11d48" },
  ];
  return (
    <div className="space-y-4">
      {groups.map((g) => (
        <div key={g.label}>
          <div className="mb-1 flex items-baseline justify-between">
            <span className="text-sm font-medium text-ink-700">{g.label}</span>
            <span className="text-lg font-bold" style={{ color: g.color }}>{g.pct}%</span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-ink-200">
            <div
              className="h-full rounded-full"
              style={{ width: `${g.pct}%`, backgroundColor: g.color }}
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-ink-500">
        Fonte: Quaest — % que concorda com a frase "as urnas eletrônicas são confiáveis"
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Verdict
// ---------------------------------------------------------------------------

function Verdict() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-emerald-500 bg-emerald-50 px-8 py-7 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white shadow">
        ✓
      </div>
      <p className="text-lg font-bold text-emerald-700">Nenhum sinal de fraude detectado</p>
      <p className="max-w-lg text-sm text-ink-600">
        Dois métodos com lógicas completamente independentes chegaram ao mesmo resultado:{" "}
        <strong>os dados do TSE não apresentam nenhuma anomalia estatística</strong>.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// References
// ---------------------------------------------------------------------------

const references = [
  {
    id: 1,
    authors: "Klimek, P. et al.",
    year: 2012,
    title: "Statistical detection of systematic election irregularities",
    journal: "Proceedings of the National Academy of Sciences (PNAS)",
    url: "https://www.pnas.org/doi/10.1073/pnas.1210722109",
  },
  {
    id: 2,
    authors: "Rozenas, A.",
    year: 2017,
    title: "Detecting Election Fraud from Irregularities in Vote-Share Distributions",
    journal: "Political Analysis",
    url: null,
  },
  {
    id: 3,
    authors: "Bueno, N.",
    year: "s.d.",
    title: "Artigo sobre legitimidade eleitoral",
    journal: "Science",
    url: null,
  },
  {
    id: 4,
    authors: "Quaest",
    year: 2022,
    title: "Levantamento sobre confiança nas urnas eletrônicas",
    journal: "Quaest Pesquisa",
    url: null,
  },
  {
    id: 5,
    authors: "Autores do artigo original",
    year: 2022,
    title: "Artigo sobre integridade das eleições de 2018 (5 testes matemáticos)",
    journal: "Forensic Science International: Synergy",
    url: "https://www1.folha.uol.com.br/poder/2022/10/eleicoes-de-2018-passam-por-5-testes-matematicos-e-nao-tem-sinal-de-fraude.shtml",
    extra: "Cobertura: Folha de S.Paulo",
  },
  {
    id: 6,
    authors: "TSE",
    year: 2022,
    title: "Artigo científico internacional descarta fraude nas eleições brasileiras",
    journal: "Tribunal Superior Eleitoral",
    url: "https://www.tse.jus.br/comunicacao/noticias/2022/Setembro/artigo-publicado-em-revista-cientifica-internacional-descarta-fraude-nas-eleicoes-brasileiras-836730",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Home() {
  const [refOpen, setRefOpen] = useState(false);

  return (
    <main className="min-h-screen bg-ink-50">

      {/* Version switcher */}
      <div className="border-b border-ink-200 bg-ink-100">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-3 text-sm">
          <div className="flex items-center gap-3">
            <span className="font-medium text-ink-500">Versão:</span>
            <span className="rounded-full bg-ink-900 px-3 py-1 font-semibold text-white">
              Resumida
            </span>
            <Link
              href="/artigo"
              className="rounded-full px-3 py-1 text-ink-500 transition hover:bg-ink-200"
            >
              Artigo completo
            </Link>
          </div>
          <span className="hidden text-xs text-ink-400 sm:block">
            Linguagem acessível, sem jargão técnico
          </span>
        </div>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-ink-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-ink-900">Eleições &amp; Dados</span>
          <a
            href="#proximos"
            className="rounded-full bg-brand-500 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-600"
          >
            O que vem por aí
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl space-y-20 px-5 py-12">

        {/* HERO */}
        <section className="space-y-6 text-center">
          <div className="flex flex-wrap justify-center gap-2">
            <Tag>Primeiro artigo de uma série</Tag>
            <Tag>Eleições 2026</Tag>
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Fraude e Eleições:<br className="hidden sm:block" /> o que esperar de 2026?
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink-600">
            Um time de pesquisadores aplicou ferramentas estatísticas usadas internacionalmente
            para examinar os dados oficiais do TSE. O objetivo é simples: separar o que é
            fato do que é narrativa — e continuar fazendo isso ao longo de todo o ciclo
            eleitoral de 2026.
          </p>
          <div className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 py-3 text-sm text-ink-600">
            <span className="text-lg">📊</span>
            Dados do TSE &bull; Métodos peer-reviewed &bull; Código aberto
          </div>
        </section>

        {/* O CENÁRIO */}
        <section className="space-y-6">
          <SectionLabel>O cenário</SectionLabel>
          <h2 className="text-2xl font-bold text-ink-900">43% dos brasileiros desconfiam das urnas</h2>
          <p className="leading-relaxed text-ink-700">
            Segundo levantamento recente da <strong>Quaest</strong>, quase metade dos brasileiros diz
            "desconfiar" do sistema eletrônico de votação. Esse número chama atenção — especialmente
            porque a desconfiança <strong>não tem relação com escolaridade, renda ou idade</strong>.
            A diferença é essencialmente política.
          </p>
          <Callout icon="⚠️" color="amber">
            <strong>Contexto importante:</strong> Nem as próprias Forças Armadas — convidadas
            pelo então presidente Bolsonaro para auditar o sistema eleitoral em 2022 —
            identificaram qualquer fragilidade ou irregularidade capaz de sustentar as
            suspeitas levantadas. Em 18 de julho de 2022, Bolsonaro convocou embaixadores
            de vários países e prometeu apresentar evidências em breve.
            Até hoje, nenhuma foi apresentada.
          </Callout>
        </section>

        {/* POLARIZAÇÃO */}
        <section className="space-y-6">
          <SectionLabel>A polarização em números</SectionLabel>
          <h2 className="text-2xl font-bold text-ink-900">
            A divisão não é de opinião — é de crença política
          </h2>
          <p className="leading-relaxed text-ink-700">
            Entre eleitores de Lula, <strong>75% acreditam que as urnas são confiáveis</strong>.
            Entre eleitores de Bolsonaro, apenas <strong>26%</strong>. Os pesquisadores usaram
            uma técnica chamada <em>análise de correspondência</em> para visualizar
            essa polarização num mapa: grupos e respostas são posicionados no espaço de acordo
            com sua proximidade — e o resultado fala por si.
          </p>

          {/* Simple bar chart */}
          <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm">
            <PolarizationBars />
          </div>

          {/* Actual chart from paper */}
          <ChartCard
            src="/charts/chart-polarizacao.png"
            alt="Análise de correspondência: Confiança nas urnas x posicionamento político"
            title="Confiança nas urnas × posicionamento político"
            caption='Grupos que se autodenominam "Lulista" e "Esquerda não lulista" ficam próximos de "Concorda"; "Bolsonarista" e "Direita não Bolsonarista" ficam próximos de "Discorda". Fonte: elaboração própria a partir dos dados da Quaest.'
          />
        </section>

        {/* O QUE É ELECTORAL FORENSICS */}
        <section className="space-y-6">
          <SectionLabel>A ciência por trás da análise</SectionLabel>
          <h2 className="text-2xl font-bold text-ink-900">
            O que é a "ciência forense eleitoral"?
          </h2>
          <p className="leading-relaxed text-ink-700">
            <em>Electoral forensics</em> é um subcampo da Ciência Política que usa estatística
            para detectar possíveis irregularidades em eleições — sem precisar "abrir" as urnas.
            A lógica é que <strong>uma fraude deixa rastros nos números</strong>: se alguém
            adulterou votos em larga escala, isso aparece nos dados agregados.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-ink-200 bg-white p-5">
              <p className="mb-1 text-sm font-bold text-ink-800">Método 1</p>
              <p className="mb-2 text-sm font-semibold text-brand-600">Fingerprint Analysis</p>
              <p className="text-sm leading-relaxed text-ink-600">
                Criado por <strong>Klimek et al. (2012)</strong>, publicado na PNAS.
                Em eleições limpas, não há relação entre <em>quantas pessoas foram votar</em>{" "}
                (turnout) e <em>quem ganhou</em> em cada seção. Se houver fraude sistemática,
                essa correlação aparece como um "caroço" no canto superior direito do gráfico.
              </p>
            </div>
            <div className="rounded-xl border border-ink-200 bg-white p-5">
              <p className="mb-1 text-sm font-bold text-ink-800">Método 2</p>
              <p className="mb-2 text-sm font-semibold text-brand-600">Método de Rozenas (2017)</p>
              <p className="text-sm leading-relaxed text-ink-600">
                Testa se percentuais "redondos" de votação (50%, 60%, 70%…) aparecem mais do
                que deveriam por acaso. Fraudadores tendem a usar números "bonitos" ao manipular
                resultados — esta técnica detecta esse padrão.
              </p>
            </div>
          </div>
        </section>

        {/* OS RESULTADOS */}
        <section className="space-y-8">
          <SectionLabel>Os resultados</SectionLabel>
          <h2 className="text-2xl font-bold text-ink-900">
            Testamos os dados do TSE — com dois métodos diferentes
          </h2>
          <p className="leading-relaxed text-ink-700">
            Os pesquisadores analisaram os dados oficiais do 1º turno das eleições presidenciais
            de 2022. Primeiro, verificaram se há qualquer correlação entre comparecimento eleitoral
            e resultado de cada candidato. Em eleições livres, essa correlação deve ser próxima de zero.
          </p>

          {/* Figura 1 - correlation matrix */}
          <ChartCard
            src="/charts/chart-correlacao.png"
            alt="Figura 1 - Matriz de correlação entre turnout e votação dos candidatos"
            title="Figura 1 — Correlação entre comparecimento e votação (1º turno, 2022)"
            caption="Nenhum candidato apresenta correlação significativa entre turnout e votação. Os quadrados em laranja/verde intenso (Bolsonaro × Lula = −0,99) refletem apenas que eles competiam diretamente — não sinalizam fraude."
            wide
          />

          <p className="leading-relaxed text-ink-700">
            Em seguida, aplicaram o <em>fingerprint analysis</em> com três amostras aleatórias
            de tamanhos diferentes (1%, 2% e 5% das seções eleitorais), para garantir que o
            resultado não dependesse do tamanho da amostra.
          </p>

          {/* Figura 2 - fingerprint PT */}
          <ChartCard
            src="/charts/chart-fingerprint-pt.png"
            alt="Figura 2 - Fingerprint analysis para o PT (Lula)"
            title="Figura 2 — Fingerprint analysis — PT (Lula)"
            caption="Em todas as amostras, r ≈ 0 e p-valor bem acima de 0,05 (não significativo). A linha de tendência é praticamente horizontal — sem nenhuma correlação entre turnout e votos no PT."
            wide
          />

          {/* Figura 3 - fingerprint PL */}
          <ChartCard
            src="/charts/chart-fingerprint-pl.png"
            alt="Figura 3 - Fingerprint analysis para o PL (Bolsonaro)"
            title="Figura 3 — Fingerprint analysis — PL (Bolsonaro)"
            caption="O mesmo resultado para Bolsonaro: coeficientes próximos de zero, p-valores altos. Nenhuma amostra indica anomalia."
            wide
          />

          <Callout icon="🧪" color="blue">
            <strong>Por que usar amostras?</strong> Pela mesma razão que pesquisas de opinião
            entrevistam 2.000 pessoas para estimar a opinião de 200 milhões: amostras bem
            desenhadas são estatisticamente válidas. Mas, para não deixar dúvidas, os
            pesquisadores também rodaram a análise com{" "}
            <strong>todos os municípios do Brasil</strong>.
          </Callout>

          {/* Figura 4 - todos os municípios */}
          <ChartCard
            src="/charts/chart-fingerprint-todos.png"
            alt="Figura 4 - Fingerprint analysis para PT e PL em todos os municípios"
            title="Figura 4 — Fingerprint analysis — todos os municípios do Brasil"
            caption='A "mancha" de calor se concentra no centro do gráfico — não no canto superior direito, que seria o sinal clássico de fraude segundo Klimek et al. (2012). O resultado é idêntico para PT e PL.'
            wide
          />

          {/* Figura 5 - kernel density */}
          <ChartCard
            src="/charts/chart-kernel-density.png"
            alt="Figura 5 - Método de Densidade de Kernel (Rozenas, 2017)"
            title="Figura 5 — Método de Densidade de Kernel (Rozenas, 2017)"
            caption="F = 0,00 significa que percentuais 'redondos' de votação não aparecem mais do que o esperado pelo acaso. Para Lula o valor foi 0,036 — também dentro do intervalo normal. O intervalo de credibilidade contém zero em ambos os casos."
            wide
          />
        </section>

        {/* VEREDITO */}
        <section className="space-y-6">
          <SectionLabel>O veredito</SectionLabel>
          <h2 className="text-2xl font-bold text-ink-900">
            Dois métodos, mesma resposta
          </h2>
          <Verdict />
          <p className="leading-relaxed text-ink-700">
            Esses resultados se somam a um estudo anterior dos mesmos pesquisadores, publicado
            em 2022 na revista <em>Forensic Science International: Synergy</em>, que aplicou
            cinco métodos diferentes às eleições de 2018 — e também não encontrou nada. A pesquisa
            foi destacada pela Folha de S.Paulo e pelo próprio TSE.
          </p>
          <blockquote className="rounded-r-xl border-l-4 border-brand-400 bg-brand-50 py-4 pl-5 pr-4 text-sm italic leading-relaxed text-ink-700">
            "O que distingue as democracias das autocracias não é a existência de eleições,
            mas sim se o público e os atores políticos aceitam os resultados de eleições
            justas como legítimos."
            <footer className="mt-2 not-italic text-xs text-ink-500">
              — Natália Bueno, artigo publicado na revista <em>Science</em>
            </footer>
          </blockquote>
          <p className="leading-relaxed text-ink-700">
            O verdadeiro problema não é a fraude — que os dados não confirmam. É a{" "}
            <strong>corrosão da confiança</strong>: quando parte do eleitorado deixa de aceitar
            resultados legítimos, a eleição perde sua função de organizar o conflito político
            de forma pacífica. Os casos dos EUA e da Hungria mostram onde esse caminho leva.
          </p>
        </section>

        {/* O QUE VEM POR AÍ */}
        <section id="proximos" className="scroll-mt-20 space-y-6">
          <SectionLabel>O que vem por aí</SectionLabel>
          <div className="space-y-4 rounded-2xl border-2 border-dashed border-brand-400 bg-brand-50 p-8 text-center">
            <div className="text-4xl">🔭</div>
            <h2 className="text-2xl font-bold text-ink-900">
              Monitoramento contínuo das Eleições de 2026
            </h2>
            <p className="mx-auto max-w-xl leading-relaxed text-ink-600">
              Este é o primeiro artigo de uma série. Ao longo do ciclo eleitoral de 2026,
              um time de pesquisadores publicará análises técnicas e estatísticas sobre:
            </p>
            <ul className="mx-auto max-w-sm space-y-2 text-left text-sm text-ink-700">
              {[
                "Integridade dos dados do TSE em tempo real",
                "Análise de narrativas desinformativas",
                "Comparativos com eleições internacionais",
                "Novos métodos da literatura de electoral forensics",
                "Transparência total: código e dados abertos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-brand-500">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-brand-600">Próximas publicações em breve.</p>
          </div>
        </section>

        {/* A EQUIPE */}
        <section className="space-y-6">
          <SectionLabel>A equipe</SectionLabel>
          <h2 className="text-2xl font-bold text-ink-900">
            Pesquisadores dedicados à integridade eleitoral
          </h2>
          <p className="leading-relaxed text-ink-700">
            O grupo é formado por cientistas políticos e estatísticos com experiência em
            análise de dados eleitorais, métodos quantitativos e ciência forense aplicada
            a eleições. Todos os métodos usados são replicáveis — o código e os dados
            estão disponíveis para qualquer pessoa verificar os resultados.
          </p>
          <div className="rounded-xl border border-ink-200 bg-white p-5">
            <p className="text-sm leading-relaxed text-ink-600">
              <strong>Missão:</strong> Produzir evidências científicas sobre a integridade
              do processo eleitoral brasileiro, de forma transparente e acessível, antes e
              depois de cada eleição. Acreditamos que democracias saudáveis dependem de
              fatos verificáveis — não de crenças.
            </p>
          </div>
        </section>

        {/* REFERÊNCIAS */}
        <section className="space-y-4">
          <SectionLabel>Referências</SectionLabel>
          <button
            onClick={() => setRefOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl border border-ink-200 bg-white px-5 py-4 text-left text-sm font-semibold text-ink-700 transition hover:bg-ink-100"
            aria-expanded={refOpen}
          >
            <span>Ver todas as referências ({references.length})</span>
            <span className="text-ink-400">{refOpen ? "▲" : "▼"}</span>
          </button>

          {refOpen && (
            <ol className="space-y-3 rounded-xl border border-ink-200 bg-white p-5">
              {references.map((ref) => (
                <li
                  key={ref.id}
                  className="flex gap-3 border-b border-ink-100 pb-3 last:border-0 last:pb-0 text-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    {ref.id}
                  </span>
                  <div>
                    <p className="leading-relaxed text-ink-700">
                      <strong>{ref.authors}</strong> ({ref.year}). {ref.title}.{" "}
                      <em>{ref.journal}</em>.
                      {ref.extra && <span className="text-ink-500"> {ref.extra}.</span>}
                    </p>
                    {ref.url && (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-0.5 block break-all text-xs text-brand-500 underline hover:text-brand-700"
                      >
                        {ref.url}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          )}
        </section>

      </div>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-ink-200 bg-white">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-ink-700">Eleições &amp; Dados</p>
          <p className="text-xs text-ink-400">
            Análise baseada em dados públicos do TSE. Métodos replicáveis e código aberto.
          </p>
        </div>
      </footer>

    </main>
  );
}
