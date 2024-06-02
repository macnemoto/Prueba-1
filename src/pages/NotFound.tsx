interface NotFoundType {
  title: string
  img: string
}

function NotFound ({ title, img }: NotFoundType) {
  return (<div className="flex flex-col justify-center items-center h-[100vh]">
    <h1 className="mb-10 text-white text-3xl font-semibold">{title}</h1>
    <img className="w-52 h-64" src={img} alt={img} />
    <img className="" src='https://8chan.moe/.media/6ff0935ab04a946e524c1a46fc7e0b7ee7955e0ceba57545cd4d1fd65da38385.jpg' alt='#' />
  </div>)
}

export default NotFound
