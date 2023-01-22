import icons from 'url:../../img/icons.svg';
import View from './view.js'

class PaginationView extends View {
	_parentElement = document.querySelector('.pagination')

	addHandlerClick(handler) {
		this._parentElement.addEventListener('click', function (event) {
			const btn = event.target.closest('.btn--inline')
			if (!btn) return

			const goToPage = +btn.dataset.goto

			handler(goToPage)
		})
	}

	_generateMarkup() {
		const currentPage = this._data.page

		const numberPage = Math.ceil(this._data.results.length / this._data.resultsPerPage)

		if (currentPage === 1 && numberPage > 1) {
			return `<button data-goto="${currentPage + 1}" "${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`
		}

		if (currentPage === numberPage && numberPage > 1) {
			return `<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
				<svg class="search__icon">
					<use href="${icons}#icon-arrow-left"></use>
				</svg>
				<span>Page ${currentPage - 1}</span>
			</button>`
		}

		if (currentPage < numberPage) {
			return `<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
				<svg class="search__icon">
					<use href="${icons}#icon-arrow-left"></use>
				</svg>
				<span>Page ${currentPage - 1}</span>
			</button>
			<button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
      </button>
			`
		}

		return ''
	}
}

export default new PaginationView();

