class ProductForm extends HTMLElement {
  constructor() {
    super();
    this._init();
  }

  _init() {
    this.form = this.querySelector('form');
    this.submitButton = this.querySelector('[type="submit"]');
    this.submitButtonText = this.submitButton?.querySelector('span[data-text]');

    // Attach event listener if form exists
    if (this.form) {
      this.form.addEventListener('submit', this._onSubmitHandler.bind(this));
    }
  }
  _onSubmitHandler(evt) {
    evt.preventDefault();
    const variantId = this.form.querySelector('input[name="id"]')?.value;
    if (this.submitButton.getAttribute('disabled') === 'true') return;
    this.submitButton.setAttribute('disabled', 'true');
    this._setButtonLoading(true);

    // Add item to the cart using CartJS
    CartJS.addItem(variantId, 1, {}, {
      success: (data, textStatus, jqXHR) => {
        alert('Product Added');
        this._setButtonLoading(false);
        this.submitButton.removeAttribute('disabled');
      },
      error: (jqXHR, textStatus, errorThrown) => {
        alert('Error: ' + errorThrown);
        this._setButtonLoading(false);
        this.submitButton.removeAttribute('disabled');
      }
    });
  }
  // Update button text during loading state
  _setButtonLoading(isLoading) {
    if (!this.submitButtonText) return;
    this.submitButtonText.textContent = isLoading ? window.global.adding : window.global.add_to_cart;
  }
}

customElements.define("product-form", ProductForm);