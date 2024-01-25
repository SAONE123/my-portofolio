var datas = [
  {
    title: "Photographic",
    url: "https://shuff.netlify.app/",
    img: "/project_1.png",
    deskripsi:
      "Shuff Photo Studio represents the ideas and passion shown through our quality and conceptual works. We have a strong vision in creating the best visuals, enabling your brand to provide a special experience to everyone. We provide documentation of photography and videography services with professional photographers + videographers and complete equipment so that photos and videos can provide the best results for your company. Contact us to get offers for photography + videography services in Jakarta at affordable prices.",
  },
  {
    title: "project figma",
    url: "https://fp03.netlify.app/",
    img: "/project_2.png",
    deskripsi: "converting figma to web",
  },
  {
    title: "Animekun",
    url: "http://animekun.great-site.net/",
    img: "/project_3.png",
    deskripsi: "anime web with database mysql from scraping",
  },
  {
    title: "SAONE",
    url: "",
    img: "/kotaimg.jpg",
    deskripsi: "liburan dulu lah",
  },
];

function Cards() {
  return (
    <>
      <div className="absolute pos card">
        {datas.map((data) => {
          return (
            <>
              <div class="card">
                <img src={data.img} alt="err" />
                <div className="card-content">
                  <h2>{data.title}</h2>
                  <p>{data.deskripsi}</p>
                  <a href={data.url} class="button">
                    <br />
                    <span className="material-symbols-outlined">
                      {data.url}
                    </span>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
