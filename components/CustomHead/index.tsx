import Head from "next/head";

function CustomHead() {
  return (
    <Head>
      <title>MetalCut</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
      ></meta>
      <meta charSet="utf-8" />

      <meta
        name="keywords"
        content="станки, станки плазменной резки, станки лазерной резки, 
    станки мультигазовой резки, фрезерные станки, преса гибочные, ЧПУ,
    высокое качество станков, промышленные станки"
      />

      <meta
        name="description"
        content="станки, станки плазменной резки, станки лазерной резки, 
    станки мультигазовой резки, фрезерные станки, преса гибочные, ЧПУ,
    высокое качество станков, промышленные станки,
    Мы лучшая компания которая занимается продажей станков лазерной, мультигазовой, плазменной резки
    "
      />
      <link rel="apple-touch-icon" href="/apple-ico.png"></link>

      <meta
        name="google-site-verification"
        content="XNAMKWWPJim8izDd5WMFx9uWq70xK66WAEo3-7unlUY"
      />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-53YX31FT8L`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-53YX31FT8L', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
}

export default CustomHead;
