import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/monicachiesa.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time dateTime="2024-04-22 08:15:00" title="22 de abril às 2024">
          Publicado há 1 hora
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera! </p>
        <p> Acabei de subir mais um projeto no meu portifa. </p>
        <p> É um projeto que fiz nas aulas da RocketSeat.</p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#rocketseat</a>{" "}
          <a href="#">#react </a> <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
