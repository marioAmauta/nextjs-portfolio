export function ContactForm() {
  return (
    <form
      className='
        flex flex-col gap-4
        bg-[--btn-bg-color]
        px-6 py-8 my-8 mx-auto rounded-md
        max-w-xl
      '
    >
      <label
        className='text-[--app]'
        htmlFor=''
      >
        Email
      </label>
      <input
        className='rounded'
        type='email'
      />
      <label htmlFor=''>Message</label>
      <textarea
        className='
          h-32
          resize-none
          rounded 
        '
      />
      <button
        className='
          rounded
          bg-slate-500
          py-2 px-4
          text-white
        '
      >
        Enviar
      </button>
    </form>
  );
}
