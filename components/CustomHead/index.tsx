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
        name="google-site-verification"
        content="XNAMKWWPJim8izDd5WMFx9uWq70xK66WAEo3-7unlUY"
      />
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
      {/* <script>
    window.ga=window.ga||function(){(ga.q = ga.q || []).push(arguments)}
    ;ga.l=+new Date; ga('create', 'UA-XXXXX-Y', 'auto'); ga('send',
    'pageview');
  </script> */}
      <script
        async
        src="https://www.google-analytics.com/analytics.js"
      ></script>
    </Head>
  );
}

export default CustomHead;
