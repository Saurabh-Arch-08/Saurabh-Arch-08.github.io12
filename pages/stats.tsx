import { ClapCount } from '@/components/stats/ClapCount';
import { Container } from 'layouts/Container';
import { LikeCount } from '@/components/stats/LikeCount';
import { LoveCount } from '@/components/stats/LoveCount';
import { PartyCount } from '@/components/stats/PartyCount';
import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

export default function Stats() {
  const { data: totalReactions } = useSWR<any>(
    '/api/statistics/total-reactions',
    fetcher
  );

  return (
    <Container title="Stats - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Stats
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Interested in numbers? I've got you covered.
        </span>
      </h1>
      <div className="grid grid-cols-4 gap-2 md:gap-6">
        <div className="col-span-4">
          <h2 className="flex items-center mb-0 text-base uppercase">
            Site Stats{' '}
            <span className="ml-4 text-xs text-gray-400 dark:text-gray-600">
              (updated every 60 seconds)
            </span>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-6">
        <div className="col-span-4">
          <h2 className="flex items-center mb-0 text-base uppercase">
            Article Stats{' '}
            <span className="ml-4 text-xs text-gray-400 dark:text-gray-600">
              (updated every 60 seconds)
            </span>
          </h2>
        </div>
        <LikeCount likeCount={totalReactions?.likeCount} />
        <LoveCount loveCount={totalReactions?.loveCount} />
        <ClapCount clapCount={totalReactions?.clapCount} />
        <PartyCount partyCount={totalReactions?.partyCount} />
      </div>
    </Container>
  );
}
