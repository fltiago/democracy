import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fraude e Eleições: o que esperar de 2026? — Artigo completo",
  description:
    "Versão completa do artigo acadêmico sobre fraude eleitoral e eleições brasileiras, com análise estatística dos dados do TSE.",
};

function Figure({
  number,
  title,
  src,
  alt,
  caption,
  wide = false,
}: {
  number: string;
  title: string;
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
}) {
  return (
    <figure className="my-8">
      <div className={`flex ${wide ? "" : "justify-center"}`}>
        <Image
          src={src}
          alt={alt}
          width={wide ? 900 : 700}
          height={wide ? 380 : 340}
          className="w-full rounded object-contain"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-ink-600">
        <strong>{number} — {title}</strong>
        {caption && <><br /><span className="text-xs text-ink-500">{caption}</span></>}
      </figcaption>
    </figure>
  );
}

export default function Artigo() {
  return (
    <main className="min-h-screen bg-white">

      {/* Version switcher */}
      <div className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-3 text-sm">
          <div className="flex items-center gap-3">
            <span className="font-medium text-ink-500">Versão:</span>
            <Link
              href="/"
              className="rounded-full px-3 py-1 text-ink-500 transition hover:bg-ink-200"
            >
              Resumida
            </Link>
            <span className="rounded-full bg-ink-900 px-3 py-1 font-semibold text-white">
              Artigo completo
            </span>
          </div>
          <span className="hidden text-xs text-ink-400 sm:block">
            Texto integral do artigo original
          </span>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-2xl px-5 py-14">

        {/* Header */}
        <header className="mb-12 text-center space-y-4">
          <h1 className="text-balance text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
            Fraude e Eleições: o que esperar de 2026?
          </h1>
          <p className="text-sm text-ink-500">
            por{" "}
            <a
              href="https://scholar.google.com/citations?user=Ux9W94sAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink-700 underline decoration-dotted hover:text-brand-600"
            >
              Dalson Figueiredo
            </a>
          </p>
          <div className="flex justify-center gap-3 pt-1">
            <a
              href="https://youtube.com/@Datafobia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1 text-xs font-medium text-ink-600 transition hover:border-brand-400 hover:text-brand-600"
            >
              ▶ YouTube — @Datafobia
            </a>
            <a
              href="https://linkedin.com/in/dalson-figueiredo-bb7a88308/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1 text-xs font-medium text-ink-600 transition hover:border-brand-400 hover:text-brand-600"
            >
              in LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=Ux9W94sAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1 text-xs font-medium text-ink-600 transition hover:border-brand-400 hover:text-brand-600"
            >
              🎓 Google Scholar
            </a>
          </div>
        </header>

        {/* Body */}
        <div className="space-y-5 text-justify text-[1.05rem] leading-[1.85] text-ink-800 [&_em]:italic [&_strong]:font-semibold">

          <p>
            "Um espectro ronda a Europa - o espectro do comunismo", escreveram Karl Marx e Friedrich
            Engels na abertura do Manifesto Comunista. Jair Bolsonaro, que provavelmente não leu e
            talvez nunca lerá o panfleto de 1848, foi um dos principais responsáveis por ressuscitar um
            conceito que costumava circular somente entre debates intelectuais e membros de diretórios
            acadêmicos. Nesse caso específico, não estamos falando em uma operacionalização enquanto
            categoria analítica, mas como dispositivo retórico de polarização. O famoso nós contra eles.
          </p>

          <p>
            Esse repertório discursivo foi sistematicamente usado para lançar dúvidas sobre a integridade
            do processo eleitoral brasileiro. Vale lembrar que nem as Forças Armadas identificaram
            fragilidades ou irregularidades capazes de sustentar tais suspeitas. Ao longo de seu mandato
            e, sobretudo, no ciclo eleitoral de 2022, Bolsonaro adotou uma estratégia conhecida na
            literatura comparada sobre autocratização. Anote aí para não esquecer: a corrosão gradual da
            confiança nas instituições. A receita de bolo consiste em questionar reiteradamente a
            confiabilidade do processo sem apresentar evidências para apoiar as dúvidas. O ponto alto
            dessa saga ocorreu em 18 de julho de 2022, quando Bolsonaro convocou embaixadores de
            diferentes países para questionar a confiabilidade do sistema de apuração eletrônica do
            Tribunal Superior Eleitoral (TSE). Na ocasião, ele ficou de mostrar evidências em breve. Até
            hoje não apresentou.
          </p>

          <p>
            Esse descolamento entre evidência empírica e crença política não é um ruído. Em termos de
            teoria democrática, isso desloca o eixo da competição eleitoral da disputa por votos para a
            disputa pela legitimidade do próprio processo. De acordo com levantamento recente da
            Quaest, 43% dos brasileiros dizem "desconfiar" do sistema eletrônico de votação.
            Curiosamente, a diferença na perceção dos eleitores não é fruto de clivagens de escolaridade,
            renda ou idade. A natureza da diferença é eminentemente política. Entre os eleitores de
            Bolsonaro em 2022, apenas 26% concordam com a afirmação de que as urnas eletrônicas são
            confiáveis. Entre os eleitores de Lula, o percentual de concordância é de 75%. Com auxílio
            de uma técnica estatística chamada análise de correspondência, é possível representar
            graficamente o tamanho da polarização.
          </p>

          <Figure
            number="Gráfico"
            title="Confiança nas urnas × posicionamento político"
            src="/charts/chart-polarizacao.png"
            alt="Análise de correspondência: Confiança nas urnas x posicionamento político"
            caption={'Concordância com a frase: \u201cAs urnas eletrônicas são confiáveis\u201d. Fonte: Elaboração própria a partir dos dados da Quaest.'}
            wide
          />

          <p>
            Como pode ser observado, enquanto eleitores que se autodenominam "Lulistas" e "Esquerda
            não lulista" tendem a concordar com a frase "as urnas eletrônicas são confiáveis", eleitores
            "Bolsonaristas" e da "Direita não Bolsonarista" tendem a discordar.
          </p>

          <p>
            Do ponto de vista da <em>electoral forensics</em>, subcampo da Ciência Política que usa métodos
            estatísticos para detectar possíveis irregularidades ou fraudes em eleições, é possível avaliar
            em que medida os dados do TSE exibem algum sinal de anomalia. Uma das explicações para
            a presença de distorções é a atividade maliciosa, no caso, fraude. Apresentamos aqui, salvo
            melhor juízo, a primeira tentativa de identificar irregularidades eleitorais seguindo o método
            que ficou conhecido como <em>fingerprint analysis</em>. Em um artigo influente publicado na
            prestigiosa PNAS, Klimek e colaboradores (2012) aplicam essa metodologia para examinar
            dados eleitorais de vários países, incluindo a Rússia, que é considerado um caso típico de
            eleições não livres, não limpas e não justas. O principal pressuposto teórico desta
            metodologia é que a adulteração de boletins de urna produziria, no agregado, um rasto
            estatístico detectável. Em eleições livres e justas, a expectativa da correlação entre a taxa de
            comparecimento (<em>turnout</em>) e a proporção de votos no candidato/partido vencedor é zero.
            Vejamos o que dizem os dados.
          </p>

          <Figure
            number="Figura 1"
            title="Associação entre taxa de comparecimento eleitoral e percentual de votos (1º turno, eleições presidenciais de 2022)"
            src="/charts/chart-correlacao.png"
            alt="Figura 1 - Matriz de correlação entre turnout e votação dos candidatos"
            wide
          />

          <p>
            Não existe correlação entre a taxa de comparecimento e o percentual de votos válidos dos
            quatro candidatos mais bem votados no primeiro turno da eleição presidencial de 2022. Essa
            é exatamente a expectativa teórica do que deveria acontecer na ausência de manipulações.
            "Mas professores, a metodologia original consiste na análise gráfica dos resultados, sendo o
            indício de fraude a presença de conglomerados de observações no canto superior direito da
            figura". Você está certíssimo e por isso mesmo é que apresentamos a Figura 2 com essas
            informações.
          </p>

          <Figure
            number="Figura 2"
            title="Fingerprint analysis (PT)"
            src="/charts/chart-fingerprint-pt.png"
            alt="Figura 2 - Fingerprint analysis para o PT"
            wide
          />

          <p>
            Estimamos o modelo <em>fingerprint</em> para três amostras aleatórias simples com tamanhos
            diferentes (1%, 2% e 5%) com o objetivo de aumentar a credibilidade dos resultados. Como
            pode ser observado, não existe associação estatisticamente significativa entre o
            comparecimento e a votação no PT. Ou seja, pelo método do <em>fingerprint analysis</em> não é
            possível apontar a presença de anomalias. Tecnicamente falando, os coeficientes de
            correlação e regressão foram nulos, o r² é zero e o p-valor não é significativo. Todas as
            estimativas apontam para o mesmo sentido: sem sinais de fraude. Repetimos então a mesma
            análise tendo agora como foco a votação recebida pelo PL. Vejamos os dados.
          </p>

          <Figure
            number="Figura 3"
            title="Fingerprint analysis (PL)"
            src="/charts/chart-fingerprint-pl.png"
            alt="Figura 3 - Fingerprint analysis para o PL"
            wide
          />

          <p>
            Para todas as amostras o coeficiente de correlação é muito próximo de zero e o p-valor fica
            acima dos limites usualmente aceitos para considerar o resultado como significante. Ou seja,
            falhamos em identificar a presença de qualquer sinal de anomalia. Essa não é a primeira vez
            que tentamos achar sinais de irregularidades nos dados do TSE. Em 2022 publicamos um
            artigo na revista <em>Forensic Science International: Synergy</em>. Na ocasião, utilizamos diferentes
            métodos para tentar encontrar algum indício de distorção estatística nos dados eleitorais de
            2018. Todos os nossos resultados foram nulos. A pesquisa foi divulgada pela{" "}
            <a
              href="https://www1.folha.uol.com.br/poder/2022/10/eleicoes-de-2018-passam-por-5-testes-matematicos-e-nao-tem-sinal-de-fraude.shtml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline hover:text-brand-800"
            >
              Folha de São Paulo
            </a>{" "}
            e pelo próprio{" "}
            <a
              href="https://www.tse.jus.br/comunicacao/noticias/2022/Setembro/artigo-publicado-em-revista-cientifica-internacional-descarta-fraude-nas-eleicoes-brasileiras-836730"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline hover:text-brand-800"
            >
              TSE
            </a>.
          </p>

          <p>
            "Mas, professores, qual é a lógica de usar amostras se existem dados para todos os
            municípios brasileiros, incluindo zonas eleitorais no exterior? Não seria mais adequado
            analisar as informações completas?"
          </p>

          <p>
            Veja, uma das principais motivações que justificam o uso de amostras é a economia de tempo
            e recursos. Muitas vezes é muito difícil colher informações para todos os casos de interesse.
            É por esse motivo que o Censo apenas é realizado de dez em dez anos: muito caro e muito
            demorado. Os institutos de pesquisa também costumam usar amostras para medir a intenção
            de votos e a avaliação do governo, por exemplo. Desde que as amostras sejam bem
            desenhadas, podemos sim usar uma parte para concluir sobre o todo. Mas, se é para acalmar o
            seu coração, também não vemos problema em reproduzir essa análise considerando agora
            todas as cidades do Brasil.
          </p>

          <Figure
            number="Figura 4"
            title="Fingerprint analysis (PT e PL, todos os municípios)"
            src="/charts/chart-fingerprint-todos.png"
            alt="Figura 4 - Fingerprint analysis para PT e PL em todos os municípios"
            caption="Distribuições bidimensionais de turnout e voto — Eleição presidencial brasileira, 1º turno (2022)."
            wide
          />

          <p>
            Novamente as evidências são contundentes: nenhum remoto sinal de que os dados foram
            adulterados. "Mas, professores, e se o responsável pela fraude soubesse de antemão que
            métodos como este seriam aplicados aos dados, ele não poderia simplesmente adulterar o
            resultados de modo a esconder os rastros?" De fato. Sabendo de antemão que isso seria feito
            daria sim para tentar maquiar os dados de modo a não deixar a fraude tão aparente. Uma
            possibilidade seria algo do tipo: para cada 10 faltosos em uma determinada seção eleitoral, ao
            invés de colocar todos os votos para um determinado candidato, o fraudador poderia
            distribuir algo como 50%, 30%, 20%. Mas, para dar certo e afetar o resultado agregado da
            eleição, isso demandaria um nível de coordenação entre mesários digno de Oscar. Ainda
            assim, para afastar qualquer dúvida do leitor, submetemos os dados do TSE a outro teste
            usualmente na área de detecção de fraudes eleitorais. Formalizado por Rozenas (2017), essa
            abordagem consiste em testar se percentuais "redondos" de votação aparecem mais vezes do
            que deveriam, separando coincidências matemáticas de possíveis indícios de fraude.
            Utilizamos o software R para aplicar essa metodologia aos dados do TSE. Para eleições
            limpas e justas, a expectativa é que o valor seja pequeno e inclua zero no cálculo do intervalo
            de credibilidade (estamos usando estatística bayesiana). Usando a votação de Lula como
            referência, a magnitude estimada de casos suspeitos foi de 0,036. Usando os dados de
            Bolsonaro, o valor foi ainda menor, como demonstra a Figura 5.
          </p>

          <Figure
            number="Figura 5"
            title="Método de Densidade de Kernel (RKD) (Rozenas, 2017)"
            src="/charts/chart-kernel-density.png"
            alt="Figura 5 - Método de Densidade de Kernel (Rozenas, 2017)"
          />

          <p>
            Para ambos os casos o intervalo de credibilidade da estimativa contém o valor zero. Ou seja,
            dentro do que é o procedimento padrão na ciência, não existem evidências de anomalias. Em
            uma frase: dois métodos com pressupostos e fundamentos diferentes falharam em identificar
            qualquer sinal de fraude nos dados do TSE.
          </p>

          <p>
            Não há razões objetivas para se falar em fraude eleitoral no Brasil. Não existem evidências
            críveis sobre qualquer irregularidade no sistema de apuração do TSE. Mas parece que isso
            não importa mais. Parte do eleitorado já partilha da crença de que as urnas não são confiáveis.
            A professora Natália Bueno, em um artigo publicado na <em>Science</em>, afirmou que "o que
            distingue as democracias das autocracias não é a existência de eleições, mas sim se o público
            e os atores políticos aceitam os resultados de eleições justas como legítimos". Em 2022, Jair
            Bolsonaro perdeu e se recusou a aceitar a derrota. Os casos recentes dos Estados Unidos e
            Hungria demonstram que a estabilidade eleitoral depende menos da inexistência de fraude e
            mais da disposição dos atores políticos em reconhecer a derrota. Quando a crença substitui a
            evidência e a derrota deixa de ser uma possibilidade legítima, o processo eleitoral perde sua
            função essencial de organizar o conflito político de forma pacífica. Então, se é para falar em
            algum espectro nos rondando, é o espectro do cinismo.
          </p>

          {/* References */}
          <hr className="my-10 border-ink-200" />

          <section>
            <h2 className="mb-4 text-base font-bold text-ink-900">Referências</h2>
            <ol className="space-y-3 text-sm leading-relaxed text-ink-700">
              <li>
                Klimek, P., Yegorov, Y., Hanel, R., &amp; Thurner, S. (2012). Statistical detection of
                systematic election irregularities. <em>Proceedings of the National Academy of Sciences
                (PNAS)</em>.{" "}
                <a
                  href="https://www.pnas.org/doi/10.1073/pnas.1210722109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-brand-600 underline hover:text-brand-800"
                >
                  https://www.pnas.org/doi/10.1073/pnas.1210722109
                </a>
              </li>
              <li>
                Rozenas, A. (2017). Detecting Election Fraud from Irregularities in Vote-Share
                Distributions. <em>Political Analysis</em>.
              </li>
              <li>
                Bueno, N. (s.d.). Artigo sobre legitimidade eleitoral. <em>Science</em>.
              </li>
              <li>
                Quaest (2022). Levantamento sobre confiança nas urnas eletrônicas.
              </li>
              <li>
                Autores do artigo original (2022). Artigo sobre integridade das eleições de 2018.{" "}
                <em>Forensic Science International: Synergy</em>. Cobertura da Folha de S.Paulo:{" "}
                <a
                  href="https://www1.folha.uol.com.br/poder/2022/10/eleicoes-de-2018-passam-por-5-testes-matematicos-e-nao-tem-sinal-de-fraude.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-brand-600 underline hover:text-brand-800"
                >
                  folha.uol.com.br
                </a>
              </li>
              <li>
                TSE (2022). Artigo científico internacional descarta fraude nas eleições brasileiras.{" "}
                <a
                  href="https://www.tse.jus.br/comunicacao/noticias/2022/Setembro/artigo-publicado-em-revista-cientifica-internacional-descarta-fraude-nas-eleicoes-brasileiras-836730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-brand-600 underline hover:text-brand-800"
                >
                  tse.jus.br
                </a>
              </li>
            </ol>
          </section>

        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-ink-200 bg-ink-50">
        <div className="mx-auto flex max-w-2xl flex-col gap-2 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-ink-700">Eleições &amp; Dados</p>
          <p className="text-xs text-ink-400">
            Análise baseada em dados públicos do TSE. Métodos replicáveis e código aberto.
          </p>
        </div>
      </footer>

    </main>
  );
}
