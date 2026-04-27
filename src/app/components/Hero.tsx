import profilePhoto from '../../assets/kayombo03.png';

export function Hero() {
  return (
    <section>
      <div>
        <div className="grid gap-12 px-6 py-10 md:px-10 md:py-14 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] xl:items-start xl:gap-14 xl:px-14">
          <div className="max-w-3xl pt-2">
            <h1 className="text-5xl leading-none font-semibold text-foreground md:text-6xl">
              HIRORIMS KAYOMBO
            </h1>

            <h2 className="mt-5 max-w-3xl text-xl leading-tight font-light text-muted-foreground md:text-3xl">
              Software Developer &amp; Graphic Designer
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-muted-foreground">
              I'm a software developer focused on building responsive web applications and clean
              digital experiences. I also work with UI/UX and graphic design to create products
              that are useful, modern, and easy to use.
            </p>

            <div className="mt-12 border-t border-border pt-10">
              <div className="flex items-start gap-4">
                <span className="mt-2 h-10 w-1.5 bg-[#56b98b]" />
                <div className="max-w-3xl">
                  <h3 className="text-3xl font-semibold text-foreground md:text-4xl">What I do</h3>
                  <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                    I build responsive websites, design clean user interfaces, and create digital
                    solutions that are simple, modern, and useful.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm bg-muted">
            <img
              src={profilePhoto}
              alt="HIRORIMS KAYOMBO"
              className="aspect-[4/3] w-full object-cover object-top grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
