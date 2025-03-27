class ProductCardVariants extends HTMLElement {
  constructor() {
    super();
    this.select = this.querySelector('select[name="id"]');
    this.variantIdInput = this.querySelector('input[name="id"]');
    this.addToCartButton = this.querySelector('button[name="add"]');
    this.priceSpan = this.addToCartButton.querySelector('span');
    this.buttonText = this.addToCartButton.querySelector('[data-text]');
    this.soldOutMessage = this.addToCartButton.querySelector('.sold-out-message');

    if (this.select) {
      this.select.addEventListener('change', this.onVariantChange.bind(this));
    }
  }

  onVariantChange(evt) {
    const selectedOption = this.select.options[this.select.selectedIndex];

    const newVariantId = selectedOption.value;
    const newPrice = selectedOption.dataset.price;
    const isDisabled = selectedOption.hasAttribute('data-disabled');
    // Update hidden input value
    this.variantIdInput.value = newVariantId;

    // Update price
    if (this.priceSpan) {
      this.priceSpan.textContent = `${newPrice} |`;
    }

    // Update button state and text
    if (isDisabled) {
      this.addToCartButton.setAttribute('disabled', 'true');
      this.addToCartButton.classList.add('opacity-70', 'cursor-not-allowed');
      this.buttonText.textContent = this.soldOutMessage.textContent.trim();
    } else {
      this.addToCartButton.removeAttribute('disabled');
      this.addToCartButton.classList.remove('opacity-70', 'cursor-not-allowed');
      this.buttonText.textContent = window.themeStrings?.addToCart || 'Add to cart';
    }
  }
}

customElements.define('product-card-variants', ProductCardVariants);
