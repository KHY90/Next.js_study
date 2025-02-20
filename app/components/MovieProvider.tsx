import { API_URL } from "../(home)/page";
import styles from "../styles/provider.module.css";

interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
  display_priority: number;
}

interface CountryProviders {
  link: string;
  flatrate?: Provider[];
  rent?: Provider[];
  buy?: Provider[];
}

async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  const data = await response.json();
  return data;
}

export default async function MovieProvider({ id }: { id: string }) {
  const providers: Record<string, CountryProviders> = await getProviders(id);

  if (!providers || Object.keys(providers).length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      {Object.entries(providers).map(([country, providerInfo]) => (
        <div key={country} className={styles.card}>
          <h2>{country}</h2>
          <a href={providerInfo.link} target="_blank" rel="noopener noreferrer">
            Watch here
          </a>

          {providerInfo.flatrate && providerInfo.flatrate.length > 0 && (
            <div>
              <h3>Subscription</h3>
              <div className={styles.providers}>
                {providerInfo.flatrate.map((provider) => (
                  <div key={provider.provider_id} className={styles.provider}>
                    <img src={provider.logo_path} alt={provider.provider_name} />
                    <p>{provider.provider_name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {providerInfo.rent && providerInfo.rent.length > 0 && (
            <div>
              <h3>Rent</h3>
              <div className={styles.providers}>
                {providerInfo.rent.map((provider) => (
                  <div key={provider.provider_id} className={styles.provider}>
                    <img src={provider.logo_path} alt={provider.provider_name} />
                    <p>{provider.provider_name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {providerInfo.buy && providerInfo.buy.length > 0 && (
            <div>
              <h3>Buy</h3>
              <div className={styles.providers}>
                {providerInfo.buy.map((provider) => (
                  <div key={provider.provider_id} className={styles.provider}>
                    <img src={provider.logo_path} alt={provider.provider_name} />
                    <p>{provider.provider_name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
