import { memo } from "react"

function Header() {
  return (
    <h1 className="text-4xl font-black mb-8 text-center">
      <span className="bg-[#FF5E5B] px-4 py-2 border-2 border-black">UNLIMIT</span>
      <span className="bg-[#00CECB] px-4 py-2 border-2 border-black">SIGNATURE</span>
      <span className="bg-[#FFED66] px-4 py-2 border-2 border-black">GENERATOR</span>
    </h1>
  )
}

export default memo(Header)