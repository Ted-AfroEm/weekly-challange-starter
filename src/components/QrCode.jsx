function QrCode() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <div className="w-64 font-outfit flex flex-col gap-4 bg-white p-3 pb-8 text-center text-sm rounded-xl shadow-xl">
        <img
          src="/challanges/qr-code-component-main/images/image-qr-code.png"
          alt=""
          className="rounded-lg"
        />
        <div className="font-bold">
          Improve your-front-end skills by building projects
        </div>
        <div className="text-gray-400">
          Scan the QR code to visit Frontend Mentoor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
}

export default QrCode;
