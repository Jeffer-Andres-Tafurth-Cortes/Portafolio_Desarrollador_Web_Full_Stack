import style from './Contact.module.css'

function Contact() {
  return (
    <>
      <section id='contact' className={style.container}>
        <h1 className='sectionTitle'>Contacto</h1>
        <form action="https://formspree.io/f/mblrrwer" method='post' formTarget='_blank'>
          <div className='formGroup'>
            <label for="name" hidden>Nombre</label>
            <input type="text" name='name' id='name' placeholder='Escribe tu nombre' required />
          </div>
          <div className='formGroup'>
            <label for="email" hidden>Correo Electronico</label>
            <input type="email" name='email' id='email' placeholder='Escribe un correo de contacto' required />
          </div>
          <div className='formGroup'>
            <label for="message" hidden>Escribe tu mensaje</label>
            <textarea name='message' id='message' placeholder='Escribe tu mensaje' required ></textarea>
          </div>
          <input type="submit" className='hover btn' value='Enviar' />
        </form>
      </section>
    </>
  )
}

export default Contact