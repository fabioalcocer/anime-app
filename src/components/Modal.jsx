import { FiX, FiMusic } from "react-icons/fi";

function Modal({ modalRef, filterOpening, card }) {
  return (
    <dialog
      className="absolute top-1/2 left-1/2 w-1/3 min-w-max max-w-xs -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-800 py-4 px-7 backdrop:bg-black/50 sm:backdrop:backdrop-blur-sm"
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
        {card.openings.map((key) => (
          <p
            key={key.title}
            onClick={() => {
              filterOpening(key[Object.keys(key)[1]]);
            }}
            className="inline-flex cursor-pointer items-center border-b-[1px] border-slate-300 border-opacity-20 pb-2 text-sm font-bold uppercase hover:text-orange-400"
          >
            <FiMusic className="mr-4 text-xl text-purple-400" />
            {`${key.title} ${Object.keys(key)[1]}`}
          </p>
        ))}
      </div>
    </dialog>
  );
}

export default Modal;
