export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    let arr = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      arr += String.fromCharCode(bufferView[i]);
    }
    return arr;
  }
}
