import { FiX, FiMusic } from "react-icons/fi";

function Modal({ modalRef, filterOpening }) {
  return (
    <dialog
      className="absolute top-1/2 left-1/2 min-w-max w-1/3 max-w-xs -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-800 py-4 px-7 backdrop:bg-black/50 sm:backdrop:backdrop-blur-sm"
      ref={modalRef}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-semibold text-rose-500 ">Openings</h4>
        <FiX
          className="cursor-pointer text-2xl text-pink-600"
          onClick={() => modalRef.current.close()}
        />
      </div>
      <div className="mt-9 mb-7 flex flex-col gap-3">
        <p
          onClick={filterOpening}
          className="inline-flex cursor-pointer items-center border-b-[1px] border-slate-300 border-opacity-20 pb-2 text-sm font-bold uppercase hover:text-orange-400"
        >
          <FiMusic className="mr-4 text-xl text-purple-400" />
          Guren no Miya OP-1
        </p>
        <p
          onClick={filterOpening}
          className="inline-flex cursor-pointer items-center border-b-[1px] border-slate-300 border-opacity-20 pb-2 text-sm font-bold uppercase hover:text-orange-400"
        >
          <FiMusic className="mr-4 text-xl text-purple-400" />
          Sasageyo OP-2
        </p>
        <p
          onClick={filterOpening}
          className="inline-flex cursor-pointer items-center border-b-[1px] border-slate-300 border-opacity-20 pb-2 text-sm font-bold uppercase hover:text-orange-400"
        >
          <FiMusic className="mr-4 text-xl text-purple-400" />
          The Rumbling OP-3
        </p>
      </div>
    </dialog>
  );
}

export default Modal;
