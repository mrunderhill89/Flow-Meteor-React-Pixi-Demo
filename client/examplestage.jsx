function assetpath(filename){
    return filename;
}

ExampleStage = React.createClass({
  displayName: 'ExampleStage',
  render: function() {
    var fontstyle = {font:'40px Times'};
    var Stage = ReactPIXI.Stage;
    var Text = ReactPIXI.Text;
    var Sprite = ReactPIXI.Sprite;
    return <Stage width={this.props.width} height={this.props.height}>
        <Text text="Hello Meteor!" x={this.props.x} y={this.props.y} style={fontstyle} anchor={new PIXI.Point(0.5,0)} key="2" />
        <Text text="Hello React!" x={this.props.x+50} y={this.props.y+50} style={fontstyle} anchor={new PIXI.Point(0.5,0)} key="3" />
        <Text text="Hello Pixi!" x={this.props.x+100} y={this.props.y+100} style={fontstyle} anchor={new PIXI.Point(0.5,0)}
        key="4" />
        <Sprite image={assetpath('dragon_brain.png')} x={this.props.x} y={this.props.y} />
    </Stage>;
  }
});