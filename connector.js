const mysqlx = require('@mysql/xdevapi');
let table1,table2,candidate;
let recommend = {
	getSchoollist(grade)
{

	mysqlx.getSession({host: '127.0.0.1', port: 33060, user: 'root', password: 'F4Fm@xZUTMqw*q'})
		.then(session => {
			table1 = session.getSchema('db1').getTable('GradeRange')
			table2 = session.getSchema('db1').getTable('HistorySchoolDataES')
			return table1.select('srange').where('grade = :grade').bind('grade', grade).execute()
		})
		.then(result => {
			let srange = result.fetchOne()
			return table2.select(['SchoolName']).where('LSrange > :range AND Syear = "2020"').bind('range', srange[0]).execute()
		})
		.then(result => {
			candidate = result.fetchAll()
		})
		.catch(error => {
				console.log(error)
			}
		)
	return candidate
},
    getOrderlist(){
		mysqlx.getSession({host: '127.0.0.1', port: 33060, user: 'root', password: 'F4Fm@xZUTMqw*q'})
			.then(session => {
				table1 = session.getSchema('db1').getTable('GradeRange')
				return table1.select('grade', 'srange').execute()
			})
			.then(result => {
				candidate = result.fetchAll()
			})
			.catch(error => {
					console.log(error)
				}
			)
		return candidate
	},
	getHistorySchool(number){
		mysqlx.getSession({host: '127.0.0.1', port: 33060, user: 'root', password: 'F4Fm@xZUTMqw*q'})
			.then(session =>{
				table1 = session.getSchema('db1').getTable('HistorySchoolDataES')
				return table1.select('HSrange','LSrange','Syear').where('SchoolNum = :number').bind('number',number).execute()
				}
			)
			.then(result =>{
				candidate = result.fetchAll()
			})
			.catch(error =>{
				console.log(error)
			})
		return candidate
	}
}
module.exports = recommend
