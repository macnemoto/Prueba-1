interface NotFoundType {
  title: string
  img: string
}

function NotFound ({ title, img }: NotFoundType) {
  return (<div className="flex flex-col justify-center items-center h-[100vh]">
    <h1 className="mb-10 text-center px-2 mt-5 lg:px-0  dark:text-gray-300  text-3xl font-semibold">{title}</h1>
    <img className="w-52 h-64" src={img} alt={title} />
  </div>)
}

export default NotFound
