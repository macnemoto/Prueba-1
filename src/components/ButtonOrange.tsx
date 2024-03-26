interface ButtonOrangeType {
  titleOne: string
  titleTwo: string
  widthOne: string
  widthTow: string

}

function ButtonOrange ({ titleOne, widthOne, titleTwo, widthTow }: ButtonOrangeType) {
  return (
  <div className="flex flex-col items-center mb-10 text-center">
        <a className={`p-3 my-4 bg-orange-500 rounded-md text-white font-medium ${widthOne}`} href="#">{titleOne}</a>
        <a className={`p-3 bg-orange-500 rounded-md text-white font-medium ${widthTow}`} href="#">{titleTwo}</a>
    </div>)
}

export default ButtonOrange
