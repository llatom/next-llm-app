import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import s from './welcome.module.css'


export const Welcome = () => {
  return (
    <div className={s.welcome}>
      <div className={s.container}>
        <div className={s.logo}>
        <Image
          alt="logo"
          src={logo}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        </div>

        <div className={s.box}>
          <p>
            👋 Hi there. You are on the openai <code>next-typescript</code>{' '}
            starter.
          </p>
        </div>

        <h3>Links</h3>
        <div className={s.box}>
          <p>
            📝 You can find some utils on our gists notion.&nbsp;
            <a
              target="_blank"
              href="https://openaistudio.notion.site/09383099eb9d415b952af95d5e6a82cc?v=a5d4e739a25a4c3193d7f16e87bdf94e"
              rel="noreferrer"
            >
              Check it out!
            </a>
          </p>
        </div>

        <h3>Utils</h3>
        <div className={s.box}>
          <p>
            🔎 Try pressing <code>ctrl+i</code> or <code>alt+i</code> to inspect
            boxes. Super useful for detecting overflows.
          </p>
        </div>

        <h3>Notes</h3>
        <div className={s.box}>
          <p>
            💣 Pssst... You should delete this welcome component, it's under
            &nbsp;
            <code>./src/components/common/welcome</code>.
          </p>
        </div>

        <h3>Credits</h3>
        <div className={s.box}>
          <p>
            From the{' '}
            <a
              href="https://openai.studio"
              target="_blank"
              rel="noopener"
              style={{ fontWeight: 'bold', textDecoration: 'none' }}
            >
              openai.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
