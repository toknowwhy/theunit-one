import Partners from '@/components/Partners'
import SplineClient from '@/components/SplineClient'
import Button from '@/components/button/Button'
import Image from 'next/image'
import LineButton from '@/components/button/LineButton'
import { appUrl, partners } from '@/utils/constants'
import { useTranslations } from 'next-intl'
import indexFund from '@/public/index-fund.png'
import Blogs from '@/components/Blogs'


export default function Home() {
  const t = useTranslations('Index')

  return <>
    {/* -------------------- Top Two Sections ------------------ */}

    <div className='bg-home-top bg-no-repeat bg-right-top'>


      {/* -------------------- First Screen: slogan and the balance animation ------------------ */}

      <div className='flex items-center'>
        <div className='ml-36 max-w-md flex-none'>
          <div className='text-8xl text-white mb-4'>
            <span className='font-light'>The </span>
            <span className='font-bold'>UNIT</span>
          </div>
          <div className='mb-10'>
            {t('slogan')}
          </div>
          <LineButton link={appUrl} title={t('launch-app')} />
        </div>
        <div className='flex-auto h-[770px]'>
          <iframe src='https://my.spline.design/interactivespherescopycopy-42e48f114d67ab4a32efddf569743588/' width='100%' height='100%'></iframe>
        </div>
      </div>


      {/* -------------------- Partners Section ------------------ */}

      <div className='flex items-center gap-48 p-32 bg-partners bg-cover mt-20'>
        <div className='flex-1'>
          <div className='text-4xl font-bold mb-4 text-white'>{t('with-support')}</div>
          <div className='text-xl'>
            {partners.join(', ')}
          </div>
        </div>
        <div className='flex-1'>
          <Partners />
        </div>
      </div>
    </div>


    {/* -------------------- UNIT Ø Introduction ------------------ */}

    <div className='flex items-center gap-40 px-40 py-24 my-32'>
      <div className='flex-1'>
        <SplineClient url='https://prod.spline.design/noP1fbdLdVrd-p58/scene.splinecode' />
      </div>
      <div className='flex-1'>
        <div className='text-4xl font-bold mb-4 text-white'>UNIT Ø</div>
        <div className='text-xl'>{t('unit-algorithm')}</div>
        <div className='flex items-center gap-2 pt-2'>
          <Button title={t('launch-app')} link={appUrl} small />
          <div className='text-xl'>{t('to-play')}</div>
        </div>
      </div>
    </div>
    

    {/* -------------------- Youtube Channel ------------------ */}

    <div className='text-4xl text-center font-bold mb-4 text-white'>{t('our-channel')}</div>
    <div className='text-xl text-center max-w-2xl mx-auto mb-7 w-full'>{t('channel-intro')}</div>
    <iframe
      src="https://www.youtube.com/embed/VP1kvgJheR8?controls=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className='max-w-4xl mx-auto w-full aspect-video shadow-2xl shadow-white/20'
    ></iframe>

    <div className='px-32 py-16 my-40 relative'>
      <div className='absolute left-32 bottom-16 top-16 right-32 bg-index bg-no-repeat bg-left-bottom rounded-lg' />
      <div className='flex items-center gap-20 bg-black-bgd/40 backdrop-blur-sm rounded-lg border border-gray-border px-9 py-24'>
        <div className='flex-1 pl-11'>
          <div className='text-4xl font-bold mb-4 text-white'>{t('traders-investors')}</div>
          <div className='text-xl'>{t('manage-fund-desc')}</div><br />
          <div className='text-xl'>{t('borrow-unit-desc')}</div>
        </div>
        <div className='flex-1'>
          <Image src={indexFund} alt='Index Fund' className='w-full' />
        </div>
      </div>
    </div>
    <Blogs readMore={t('read-more')} title={t('from-blog')} />
  </>
}
