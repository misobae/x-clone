type Props = {
  pageParam?: number
}

export async function getFollowingPosts({ pageParam }: Props) {
  const res = await fetch(`http://localhost:9090/api/followingPosts?cursor=${pageParam}`, {
    next: {
      tags: ['posts', 'followings'],
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}