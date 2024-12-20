import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions';

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
      <img src={profileImage} className='w-6 h-6 rounded-full object-cover' />
    );
  }
  return <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white' />;
}
export default UserIcon;
