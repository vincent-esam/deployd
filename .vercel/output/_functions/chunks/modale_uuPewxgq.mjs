import { jsx, jsxs } from 'react/jsx-runtime';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx("dialog", { className: "modal-overlay", open: true, onClick: onClose, children: /* @__PURE__ */ jsxs("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsx("button", { className: "close-button", onClick: onClose, children: "×" }),
    title && /* @__PURE__ */ jsx("h2", { children: title }),
    /* @__PURE__ */ jsx("div", { className: "modal-body", children })
  ] }) });
};

export { Modal as M };
