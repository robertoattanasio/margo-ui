export const isMargoLayerSupported = (): boolean =>
  typeof HTMLDialogElement !== "undefined" && typeof HTMLDialogElement.prototype.showModal === "function";
