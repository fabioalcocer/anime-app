import { FiX, FiMusic } from "react-icons/fi";

function Modal({ modalRef, filterOpening, card }) {
  return (
    <dialog
      className="fixed top-1/2 left-1/2 w-1/3 min-w-[298px] max-w-xs -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-800 py-4 px-5 backdrop:bg-black/50 sm:backdrop:backdrop-blur-sm"
      ref={modalRef}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-semibold text-rose-500 ">Openings</h4>
        <FiX
          className="cursor-pointer text-2xl text-pink-600"
          onClick={() => {
            window.onscroll = null;
            modalRef.current.close();
          }}
        />
      </div>
      <div className="mt-9 mb-7 flex flex-col gap-3">
        {card.openings.map((op) => (
          <p
            key={op.title}
            onClick={() => {
              filterOpening(op[Object.keys(op)[1]]);
            }}
            className="transition-colors: inline-flex cursor-pointer items-center rounded-lg bg-slate-700 py-2 px-2 text-sm font-bold uppercase duration-300 hover:bg-slate-600 hover:text-orange-400"
          >
            <FiMusic className="mr-4 text-xl text-purple-400" />
            {`${op.title} ${Object.keys(op)[1]}`}
          </p>
        ))}
      </div>
    </dialog>
  );
}

export default Modal;
