if (Meteor.isClient) {
  FlowRouter.route('/', {
    action: function() {
      // We render the template with React
      React.render( <ExampleStage x={150} y={60} />, document.getElementById('yield'));
    }
  });
}

if (Meteor.isServer) {
}
