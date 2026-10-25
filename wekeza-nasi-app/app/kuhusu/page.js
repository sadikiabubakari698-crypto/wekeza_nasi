export default function Kuhusu() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WEKEZA NASI",
    "url": "https://wekeza-nasi.vercel.app",
    "founder": {
      "@type": "Person",
      "name": "Abubakari Sadiki Kizumbilu",
      "jobTitle": "Mwanzilishi",
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Sokoine University of Agriculture"
        }
      ],
      "birthPlace": {
        "@type": "Place",
        "name": "Kisarawe, Pwani"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dar es Salaam",
        "addressCountry": "TZ"
      }
    }
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff" }}>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1>WEKEZA NASI</h1>
      <h2>Kuhusu Sisi</h2>

      <div style={{ padding: "1.5rem", border: "1px solid #e9edf2", borderRadius: "8px", backgroundColor: "#f7f7f7", marginBottom: "2rem" }}>
        <h3 style={{ marginTop: 0, color: "#1e7b4c" }}>Mmiliki na Mwanzilishi</h3>
        <p style={{ margin: "0.5rem 0" }}><strong>Jina:</strong> Abubakari Sadiki Kizumbilu</p>
        <p style={{ margin: "0.5rem 0" }}><strong>Mahali:</strong> Dar es Salaam, Tanzania</p>
        <p style={{ margin: "0.5rem 0" }}><strong>Taarifa Binafsi:</strong> Nimezaliwa Kisarawe, Pwani. Nilisoma shule ya msingi Boga, sekondari Maneromango, kidato cha tano na sita Minaki, na kuhitimu Chuo Kikuu cha Sokoine (SUA).</p>
        <p style={{ margin: "0.5rem 0" }}>
          "Mimi ni mwekezaji na mwanafunzi wa soko la hisa. Ninawekeza DSE kupitia Vertex International Securities na nina hisa za CRDB Bank. Nimeunda WEKEZA NASI ili kila Mtanzania apate mahali salama pa kujifunza uwekezaji kwa Kiswahili rahisi, bila hofu ya kutapeliwa."
        </p>
      </div>

      <div className="lesson-box">
        <h3>Kwa Nini Tulianzishwa</h3>
        <p><strong>1. Kukosekana kwa jukwaa moja la uwekezaji</strong></p>
        <p>
          Taarifa, elimu, uzoefu, mawazo, na fursa za uwekezaji zimetawanyika
          sehemu mbalimbali, mitandao ya kijamii, video, watu binafsi,
          tovuti. WEKEZA NASI inalenga kuwa eneo moja ambalo Watanzania
          wanaweza kukutana, kujifunza, kushirikishana, na kukua katika
          uwekezaji.
        </p>
        <p><strong>2. Kukosekana kwa sehemu ya kujifunza kwa mpangilio</strong></p>
        <p>
          Mtu anayeanza kutoka sifuri awe na njia ya kueleweka ya kujifunza,
          hapa ndipo Academy inaingia.
        </p>
        <p><strong>3. Kukosekana kwa uelewa wa yanayotokea sokoni</strong></p>
        <p>
          Si kumwambia mtu tu &quot;nunua&quot; au &quot;uza,&quot; bali
          kumsaidia kuelewa nini kimetokea, kwa nini, ushahidi ni upi, na
          jambo hilo lina maana gani, hapa ndipo Uchambuzi wa Soko na AI
          zinaingia.
        </p>
        <p><strong>4. Kukosekana kwa jamii ya wawekezaji</strong></p>
        <p>
          Uwekezaji haupaswi kuwa safari ya mtu mmoja. Community inaruhusu
          mtu kushirikisha wazo, kusoma uzoefu wa mwingine, kupata hamasa,
          kujifunza kutoka kwa aliye mbele yake, na kujenga fursa pamoja.
        </p>
        <p>
          <strong>WEKEZA NASI ilianzishwa kwa sababu kulikuwa na pengo la
          jukwaa moja linalowaunganisha Watanzania katika safari nzima ya
          uwekezaji, kutoka kupata elimu, kuelewa kinachoendelea sokoni,
          kupata msaada wa AI, hadi kushirikiana na jamii ya wawekezaji.</strong>
        </p>
      </div>

      <div className="lesson-box">
        <h3>Falsafa Yetu</h3>
        <p>
          WEKEZA NASI haijajengwa kwa lengo la kuiuza jamii kwa maslahi ya
          kampuni. Lengo letu ni kuinua jamii kiuchumi na kuwasaidia watu
          kutimiza ndoto zao.
        </p>
        <p>
          Kila kitu tunachojenga, Academy, Uchambuzi wa Kampuni, Uchambuzi
          wa Soko, au chochote kijacho, kinarudi kwenye swali moja: Je, hiki
          kinamsaidia Mtanzania kujenga maarifa, uwezo, fursa, na hatimaye
          uhuru wa kifedha?
        </p>
      </div>

      <p><a href="/">&larr; Rudi Nyumbani</a></p>
    </main>
  );
}
