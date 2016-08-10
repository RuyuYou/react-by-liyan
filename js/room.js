const App = React.createClass({
    render: function () {
        return <div>
            <Title/>
            <Body/>
        </div>
    }
});

const Title = React.createClass({
    render: function () {
        return <div className="row bg-primary my-tg">
            <ul className="nav">
                <li className="col-xs-3 col-xs-offset-1 "><span className="glyphicon glyphicon-chevron-left"> </span> </li>
                <li className="col-xs-4 text-center">洗刷刷</li>
                <li className="col-xs-2 col-xs-offset-2"><span className="glyphicon glyphicon-heart-empty"> </span> </li>
            </ul>
        </div>
    }
});


const Body = React.createClass({
    render: function () {
        return <div className={this.props.className}>
            <div className="row">
                <Top/>
                <Bottom/>
            </div>
        </div>
    }
});

const Top =React.createClass({
    render:function () {
        return <div className="row">
            <h4 className="col-xs-offset-1 col-xs-4 text-center">房间号</h4>
            <h4 className="col-xs-offset-2 col-xs-4 text-center">预约状态</h4>
            <br/><br/>
        </div>

    }
});

const Bottom = React.createClass({
    render:function () {
        return <div className="row">
            <div>
                <div className="col-xs-offset-1 col-xs-4 text-center">1</div>
                <button className="col-xs-offset-3 col-xs-2 text-center btn-info btn-xs">预约</button>
            </div>
            <br/><br/>
            <div>
                <div className="col-xs-offset-1 col-xs-4 text-center">1</div>
                <button className="col-xs-offset-3 col-xs-2 text-center btn-info btn-xs">预约</button>
            </div>
            <br/><br/>
            <div>
                <div className="col-xs-offset-1 col-xs-4 text-center">1</div>
                <button className="col-xs-offset-3 col-xs-2 text-center btn-info btn-xs">预约</button>
            </div>
        </div>
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));