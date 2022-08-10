
const LinkedList = require("./lib/linkedList");

class Editor {
  /**
   * Constructs a new Editor object with the given text.
   * Defaults to empty text. Cursor is positioned at the end of the text.
   * @param {LinkedList} text - A linked List containing the characters that are in the editor,
   * empty by default
   */
  constructor(text = new LinkedList()) {
    this.text = text;
    this.cursor = this.text.find(
      (node, index) => index === this.text.length - 1
    );
  }

  /**
   * Insert a character at the cursor position of the editor.
   * @param {*} char a value to be inserted into the editor
   * @returns {Editor} a reference to this editor
   */
  insert(char) {
    // if the cursor is null or the list is empty, just insert at the head
    if (!this.cursor) {
      this.text.insertAtHead(char);
      this.cursor = this.text.head;
    } else {
      // or just use a regular insert
      this.text.insert(char, ((node) => node === this.cursor).next);
      this.cursor = this.text.find(
        (node, index) => index === this.text.length -1
      );
    }
    
    //return reference to the editor
    return this;
  }

  /**
   * Remove the character at the cursor position.
   * Moves the cursor to the previous position.
   * If editor is empty does nothing.
   * findWithPrevious  returns a matchedNode and previousNode
   * @returns {Editor} a reference to this editor
   */
  delete() {
    if (this.text.length && this.cursor) {
      const [matchedNode, previousNode] = this.text.findWithPrevious((node) => node === this.cursor);
      this.text.remove((node) => node === this.cursor);
      this.cursor = previousNode;     
    }    
    
    return this;
  }

  /**
   * Moves the cursor one position to the left.
   * If the cursor is at the start of the editor nothing happens. return this.
   * @returns {Editor} a reference to this editor
   */
  arrowLeft() {
    if (!this.cursor) return this;
    
    const [matchedNode, previousNode] = this.text.findWithPrevious((node) => node === this.cursor);
    this.cursor = previousNode;
    return this;
  }

  /**
   * Moves the cursor one position to the right.
   * If the cursor is at the end of the editor nothing happens.
   * @returns {Editor} a reference t this editor
   */
  arrowRight() {
    if (this.text.length) {
      if (this.cursor == null) {
        this.cursor = this.text.head;
      } else i
      
      
      
      f (this.cursor.next) {
        this.cursor = this.cursor.next;
      }
    }
    return this;
  }
  
}

module.exports = Editor;
