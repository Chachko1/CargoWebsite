

const Form = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-form text-white w-full h-full pb-10">
            <h1 className="lg:text-6xl text-4xl w-[80%] lg:w-[50%] font-space-grotesk p-5 mt-10">Готови ли сте да работим заедно?</h1>
            <p className="lg:w-[50%] w-[85%] font-inter p-5 text-xl">Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</p>
            <div className="flex justify-center items-center rounded-full ">
                <input type="text" placeholder="Мобилен Телефон" className=" lg:p-5 p-2 lg:pl-10 pl-4 rounded-l-lg text-customGreen" />
                <button className="bg-formButton lg:p-5 p-2  text-customGreen font-bold rounded-r-lg">Изпрати</button>
                </div>
    </div>
  )
}

export default Form