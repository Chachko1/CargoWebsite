

const Header = () => {
  return (
  <section className="flex flex-col items-center justify-center">
            <h1 className="text-customBlue font-inter font-semibold text-2xl text-center w-[80%]
            sm:text-4xl md-mt-[70px] md:leading-[108%] md:-tracking-[4px] lg:w-[50%] lg:text-5xl xl:text-6xl
            2xl:text-7xl lg:pt-10">
                Гъвкави решения за сухопътен транспорт за всеки клиент
            </h1>
        <div className="mt-5 max-w-[90%] lg:mt-[60px]">
            <img src="/image.png" alt="truck photo" width={969} height={690} />
        </div>
    
        </section>
  )
}

export default Header