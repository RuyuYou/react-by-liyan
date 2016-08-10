const App = React.createClass({
    render:function () {
        return <div>
            <Title/>
            <Body/>
        </div>
    }
});

const Title =React.createClass({
    render:function () {
        return <div className="row bg-primary my-tg">
            <ul className="nav">
                <li className="col-xs-3 col-xs-offset-1 "><span className="glyphicon glyphicon-chevron-left"> </span> </li>
                <li className="col-xs-4 text-center">最佳推荐</li>
                <li className="col-xs-2 col-xs-offset-2"><span className="glyphicon glyphicon-heart-empty"> </span> </li>
            </ul>
        </div>
    }
});
const Body =React.createClass({
    render:function () {
        return <div>
            <Top/>
            <Bottom/>
        </div>
    }
});

const Top =React.createClass({
    render:function () {
        return <div className="row">
            <br/><br/>
            <h4 className="col-xs-offset-1 col-xs-4 text-center">房间号</h4>
            <h4 className="col-xs-offset-1 col-xs-5 text-center">可预约时间</h4>
            <br/><br/>
        </div>
    }
});

const Bottom =React.createClass({
    render:function () {
        return <div>
            <div className="row">
                <br/>
                <div className="col-xs-offset-1 col-xs-4 text-center">1</div>
                <div className="col-xs-offset-1 col-xs-5 text-center">&nbsp;&nbsp;17:00-18:00</div>
            </div>
            <br/><br/><br/><br/><br/><br/>
            <div className="text-center">
                <button type="button" className="btn btn-info ">预约</button>
            </div>
        </div>
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));