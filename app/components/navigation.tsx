"use client";
/**
 * Client Components
클라이언트 컴포넌트를 사용하려면 파일 상단, import 위에 React "use client" 지시어를 추가
"use client"은 서버와 클라이언트 컴포넌트 모듈 간의 경계를 선언하는 데 사용.
즉, 파일에 "use client"을 정의하면 하위 컴포넌트를 포함하여 해당 파일로 가져온 다른 모든 모듈이 클라이언트 번들의 일부로 간주.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();
    return (
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
            {path === "/about-us" ? "🔥" : ""}
          </li>
        </ul>
      </nav>
    );
  }