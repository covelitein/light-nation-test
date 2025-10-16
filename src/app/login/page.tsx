export default function loginPage() {
  return (
    <section className="">
      <div className="flex items-center justify-center sm:py-10 py-0 min-h-screen">
        <div className="flex items-start justify-center gap-5">
          {/* image start */}
          <div className="rounded-xl xl:w-[35rem] lg:w-[30rem] max-lg:hidden bg-[#111]/70 self-stretch py-[65px] px-16 text-white border border-gray-600">
            <img
              loading="lazy"
              src="/rocket.png"
              alt="login img"
              className="h-[12rem] "
            />
            <div className="mt-5 z-[2]">
              <h3 className="text-[80px] font-semibold leading-[60px]">
                Continue <br />{" "}
                <span className="text-[56px] font-light">the Adventure</span>
              </h3>
            </div>
          </div>
          {/* image end */}

          {/* login screen start */}
          <div className="flex items-center self-stretch justify-center z-[5]">
            <div className="bg-[#111] xl:w-[30rem] lg:w-[27rem] sm:w-[30rem] w-full min-h-screen sm:p-14 max-sm:px-2 max-sm:py-10 sm:rounded-xl"></div>
          </div>
          {/* login screen end */}
        </div>

        {/* absolute elements start */}
        <div className="h-[400px] w-[400px] -top-40 -left-32 rounded-full fixed bg-red-500/20" />
        <div className="h-[400px] w-[400px] -bottom-40 -left-32 rounded-full fixed bg-red-500/20" />
        {/* absolute elements end */}
      </div>
    </section>
  );
}
