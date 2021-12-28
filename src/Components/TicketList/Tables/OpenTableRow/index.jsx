import style from "../../styles.module.css";

export default function OpenTableRow({ columnNameLeft, columnNameRight, contentLeft, contentRight }) {
  return (
    <>
      <tr className={style.background_dropdown}>
        <td colSpan='6' className={style.action_required}>
          {columnNameLeft}
        </td>
        <td colSpan='2' className={`${style.center} ${style.text_bold}`}>
          {columnNameRight}
        </td>
      </tr>
      <tr className={style.background_dropdown_shadow}>
        <td colSpan='6' className={style.description}>
          {contentLeft}
        </td>
        <td colSpan='2' className={style.center}>
          {contentRight}
        </td>
      </tr>
    </>
  );
}
