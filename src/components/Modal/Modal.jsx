import './Modal.scss';

const Modal = () => {
	function handleClick(e) {
		e.preventDefault();
		console.log('Le lien a été cliqué.');
	  }
	  
	return (
		<div>
			<p>Ma fenetre modale</p>
			<a href="#" onClick={ handleClick }>Ouverture de la modale</a>
		</div>
	)
}




export default Modal