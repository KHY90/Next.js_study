import { API_URL } from "../(home)/page";
import styles from "../styles/cast-info.module.css";

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

async function getCast(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
    const cast = await getCast(id);
    if (!cast.length) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className={styles.container}>
        {cast.map((member: CastMember) => (
          <div key={member.id} className={styles.card}>
            <img src={member.profile_path} alt={member.name} className={styles.profile} />
            <div className={styles.info}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.character}>{member.character}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }