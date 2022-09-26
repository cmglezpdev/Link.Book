import { useMemo } from 'react';
import { RiTwitterFill } from 'react-icons/ri';

export const Footer = () => {
  
  const shareOnTwitter = useMemo(() => 'https://twitter.com/intent/tweet?text=I%27m%20using%20%23ZenTwitter,%20a%20Chrome%20extension,%20to%20hide%20Twitter%20vanity%20metrics,%20notifications,%20distractions%20and%20start%20to%20be%20more%20productive.%20Check%20it%20out!%0A%0Ahttps%3A//chrome.google.com/webstore/detail/zen-twitter/nlkendkabgopehmlmohfbkgkjjdjepnb', []);
  const twitterAccount = useMemo(() => 'twitter.com/cmglezpdev', []);

  return (
    <footer className='py-3 text-xs flex flex-nowrap justify-evenly items-center border-t-2 border-gray-400'>
        <p className=''>
          by{" "}
          <a href={twitterAccount} className='opacity-70'>@cmglezpdev</a>
        </p>

        <a href={shareOnTwitter} className='text-cyan-500 font-bold'>
          share on{" "}
          <RiTwitterFill className='inline text-base' />
        </a>
    </footer>
  )
}
