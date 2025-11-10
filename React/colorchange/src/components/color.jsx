const Color = (props) => {
  return (
    <div>
      <button className="redbutton" onClick={() => props.onColorChange('red')}></button>
      <button className="greenbutton" onClick={() => props.onColorChange('green')}></button>
      <button className="bluebutton" onClick={() => props.onColorChange('blue')}></button>
    </div>
  );
};

export default Color;
