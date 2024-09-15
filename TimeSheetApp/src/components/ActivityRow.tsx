const ActivityRow = () => {
  return (
    <>
      <tr>
        <td>
          <select>
            <option>Choose client</option>
            <option>Client 1</option>
            <option>Client 2</option>
          </select>
        </td>
        <td>
          <select>
            <option>Choose project</option>
            <option>Project 1</option>
            <option>Project 2</option>
          </select>
        </td>
        <td>
          <select>
            <option>Choose category</option>
            <option>Front-End Development</option>
            <option>Design</option>
          </select>
        </td>
        <td>
          <input type="text" className="in-text medium" />
        </td>
        <td className="small">
          <input type="text" className="in-text xsmall" />
        </td>
        <td className="small">
          <input type="text" className="in-text xsmall" />
        </td>
      </tr>
    </>
  );
};

export default ActivityRow;
