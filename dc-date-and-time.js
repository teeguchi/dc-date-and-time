/** 
 * 現在の日付と時刻の取得
 * 
 * @return object Current date and time.
 */
function getCdt() {
	const cdt = new Date();
	
	return {
		y: cdt.getFullYear(),
		m: cdt.getMonth(),
		d: cdt.getDate(),
		w: cdt.getDay(),
		hr: cdt.getHours(),
		min: cdt.getMinutes(),
		sec: cdt.getSeconds()
	};
}

/**
 * フォーマット
 * 
 * @param object
 */
// フォーマット_A
function getFormatA(cdt, time) {
	const year = cdt.y;
	const month = cdt.m < 10 ? '0' + (cdt.m + 1) : cdt.m + 1;
	const date = cdt.d < 10 ? '0' + cdt.d : cdt.d;
	const hour = cdt.hr < 10 ? '0' + cdt.hr : cdt.hr;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	
	if (time === false) {
		return year + '/' + month + '/' + date;
	}
	return year + '/' + month + '/' + date + ' ' + hour + ':' + minute;
}

// フォーマット_B
function getFormatB(cdt, time) {
	const year = cdt.y;
	const month = cdt.m < 10 ? '0' + (cdt.m + 1) : cdt.m + 1;
	const date = cdt.d < 10 ? '0' + cdt.d : cdt.d;
	const week = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'];
	const hour = cdt.hr < 10 ? '0' + cdt.hr : cdt.hr;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	
	if (time === false) {
		return  year + '/' + month + '/' + date + week[cdt.w];
	}
	return year + '/' + month + '/' + date + week[cdt.w] + ' ' + hour + ':' + minute;
}

// フォーマット_C
function getFormatC(cdt, time) {
	const year = cdt.y;
	const month = cdt.m + 1;
	const date = cdt.d;
	const week = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'];
	const hour = cdt.hr;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	
	if (time === false) {
		return year + '/' + month + '/' + date + week[cdt.w];
	}
	return year + '/' + month + '/' + date + week[cdt.w] + ' ' + hour + ':' + minute;
}

// フォーマット_D
function getFormatD(cdt, time) {
	const year = cdt.y;
	const month = cdt.m + 1;
	const date = cdt.d;
	const hour = cdt.hr;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	
	if (time === false) {
		return year + '年' + month + '月' + date + '日';
	}
	return year + '年' + month + '月' + date + '日' + ' ' + hour + '時' + minute + '分';
}

// フォーマット_E
function getFormatE(cdt, time) {
	const year = cdt.y;
	const month = cdt.m + 1;
	const date = cdt.d;
	const week = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'];
	const hour = cdt.hr < 10 ? '0' + cdt.hr : cdt.hr;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	
	if (time === false) {
		return year + '年' + month + '月' + date + '日' + week[cdt.w];
	}
	return year + '年' + month + '月' + date + '日' + week[cdt.w] + ' ' + hour + ':' + minute;
}

// フォーマット_F
function getFormatF(cdt, time) {
	const year = cdt.y;
	const month = cdt.m + 1;
	const date = cdt.d;
	const week = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
	const hour = cdt.hr;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	
	if (time === false) {
		return year + '年' + month + '月' + date + '日' + week[cdt.w];
	}
	return year + '年' + month + '月' + date + '日' + week[cdt.w] + ' ' + hour + ':' + minute;
}

// フォーマット_G
function getFormatG(cdt, time) {
	const year = cdt.y;
	const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const date = cdt.d;
	const hour = cdt.hr < 12 ? cdt.hr: cdt.hr - 12;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	const ampm = cdt.hr < 12 ? 'AM': 'PM';
	
	if (time === false) {
		return month[cdt.m] + ' ' + date + ', ' + year;
	}
	return month[cdt.m] + ' ' + date + ', ' + year + ', ' + hour + ':' + minute + ' ' + ampm;
}

// フォーマット_H
function getFormatH(cdt, time) {
	const year = cdt.y;
	const month = cdt.m < 10 ? '0' + (cdt.m + 1) : cdt.m + 1;
	const date = cdt.d < 10 ? '0' + cdt.d : cdt.d;
	const hour = cdt.hr < 10 ? '0' + cdt.hr : cdt.hr;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	
	if (time === false) {
		return year + '' + month + '' + date;
	}
	return year + '' + month + '' + date + '' + hour + '' + minute;
}

// フォーマット_I
function getFormatI(cdt, time) {
	const y = cdt.y;
	const m = cdt.m < 10 ? '0' + (cdt.m + 1) : cdt.m + 1;
	const d = cdt.d < 10 ? '0' + cdt.d : cdt.d;
	const ymd = Number(y + '' + m + '' +  d);
	let era = '';
	let nen = 0;
	if (ymd < 19120730) {
		era = '明治';
		nen = y - 1900 + 33;
	} else if (ymd < 19261225) {
		era = '大正';
		nen = y - 1900 - 11;
	} else if (ymd < 19890108) {
		era = '昭和';
		nen = y - 1900 - 25;
	} else if (ymd < 20190501) {
		era = '平成';
		nen = y - 2000 + 12;
	} else {
		era = '令和';
		nen = y - 2000 - 18;
	}
	if (nen === 1) {
		nen = '元';
	}
	const year = cdt.y;
	const month = cdt.m + 1;
	const date = cdt.d;
	const week = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'];
	const hour = cdt.hr;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	
	if (time === false) {
		return era + nen + '年' + month + '月' + date + '日' + week[cdt.w];
	}
	return era + nen + '年' + month + '月' + date + '日' + week[cdt.w] + ' ' + hour + '時' + minute + '分';
}

/**
 * フォーマットの生成
 * 
 * @return array
 */
function generateFormats(cdt, time) {
	
	return [
		getFormatA(cdt, time),
		getFormatB(cdt, time),
		getFormatC(cdt, time),
		getFormatD(cdt, time),
		getFormatE(cdt, time),
		getFormatF(cdt, time),
		getFormatG(cdt, time),
		getFormatH(cdt, time),
		getFormatI(cdt, time)
	];
}

/**
 * select要素にフォーマットを生成
 * 
 * @return string Rendering of option element.
 */
function selectRenderHtml(cdt, time) {
	const dcdtFormats = generateFormats(cdt, time);
	let html = '';
	for (let i = 0; i < dcdtFormats.length; i++) {
		html += '<option value="' + dcdtFormats[i] + '">' + dcdtFormats[i] + '</option>';
	}
	
	return html;
}

/**
 * 時計の表示に変換
 * 
 * @return string Converted Clock Time.
 */
function convertCt(cdt) {
	let h = cdt.hr;
	if (h < 10) {
		h = '0' + h;
	}
	let m = cdt.min;
	if (m < 10) {
		m = '0' + m;
	}
	let s = cdt.sec;
	if (s < 10) {
		s = '0' + s;
	}
	
	return {
		hr: h,
		min: m,
		sec: s
	}
}

/**
 * Calender関数
 * 
 * @return object tbody element. 
 */
function myCalender(setNoy, setNom, setNod) {
	// 先月で調べる
	let d = new Date();
	d.setFullYear(setNoy);
	d.setMonth(setNom - 1);
	d.setDate(0);
	const lastDow = d.getDay(); // 先月の最後の曜日
	const lastNod = d.getDate(); // 先月の最後の日にち
	
	// 今月で調べる
	d = new Date();
	d.setFullYear(setNoy);
	d.setMonth(setNom);
	d.setDate(0);
	const nowNod = d.getDate(); // 今月の最後の日にち
	
	// tableの表示
	let lastCnt = lastDow; // 先月分の端数のカウント
	let nowCnt = nowNod;  // 今月分の日数のカウント
	let nextCnt = 1; // 来月分の端数のカウント
	const tbody = document.createElement('tbody');
	tbody.classList.add('days'); // 戻り値のクラス名
	for (let i = 0; i < 6; i++) {
		const tr = document.createElement('tr');
		for (let j = 0; j < 7; j++) {
			const td = document.createElement('td');
			if (i == 0 && j <= lastDow) {
				td.textContent = lastNod - lastCnt; // 先月分の端数の表示
				lastCnt--;
			} else if (nowCnt > 0) {
				nowCnt--; // 最初にデクリメントする
				td.classList.add('concerned');
				const concerned = nowNod - nowCnt; // 今月の日にちの決定
				td.textContent = concerned;
				if (concerned == setNod) {
					td.classList.add('today'); // 今日の日にちの表示
				} else if (concerned == nowNod && nowNod < setNod) {
					td.classList.add('today'); // 最後の日にちを今日にする
				}
			} else {
				td.textContent = nextCnt; // 来月分の端数の表示
				nextCnt++;
			}
			tr.appendChild(td);
		}
		 tbody.appendChild(tr);
	}
	
	return tbody;
}

/**
 * jQuery
 */
jQuery(function($) {
	// Clock
	function dspClock() {
		const cdt = getCdt();
		const ct = convertCt(cdt);
		$('#dcclock').text(ct.hr + ':' + ct.min + ':' + ct.sec);
		window.setTimeout(dspClock, 1000);
	}
	dspClock();
	
	// DCDT
	let cdt =  getCdt(); // 現在の日付と時刻の取得
	let time = true; // 時間の表示の有無
	const dcdtSelect = $('#dcdt-select'); // フォーマット用select要素
	dcdtSelect.html(selectRenderHtml(cdt, time)); // フォーマットの表示
	
	// Year
	let yearHtml = '';
	for (let i = 1900; i < 2100; i++) {
		if ((cdt.y) == i) {
			yearHtml += '<option value="' + i + '" selected>' + i + '年</option>';
		} else {
			yearHtml += '<option value="' + i + '">' + i + '年</option>';
		}
	}
	$('#cal-year').html(yearHtml);
	
	// Month
	$('#cal-month option').each(function() {
		if ((cdt.m + 1) == $(this).val()) {
			$('#cal-month').val((cdt.m + 1));
		}
	});
	
	// Calender
	let setNoy = cdt.y; // 年
	let setNom = cdt.m + 1; // 月
	let setNod = cdt.d // 日
	const calHtml = myCalender(setNoy, setNom, setNod); // Calender関数実行
	$('#cal-dsp').append(calHtml);
	
	// フォーマットの更新関数
	function refFormat(cdt, time) {
		let selecIdx = 0;
		dcdtSelect.children('option:selected').each(function() {
			selecIdx = $(this).index(); // 選択状態の要素のインデックス
		});
		dcdtSelect.html(selectRenderHtml(cdt, time)); // フォーマットの表示
		dcdtSelect.children('option').each(function() {
			if ($(this).index() == selecIdx) {
				dcdtSelect.val($(this).val()); // 選択状態に設定
			}
		});
	}
	
	// 日の選択
	$(document).on('click', '.concerned', function() {
		// Calender
		$('.concerned').removeClass('today');
		$(this).addClass('today');
		setNod = Number($(this).text()); // 日
		const calHtml = myCalender(setNoy, setNom, setNod); // Calender関数実行
		
		// Format
		cdt.d = setNod; // 日
		cdt.w = $(this)[0].cellIndex; // 曜日の更新
		refFormat(cdt, time);　// フォーマットの更新
	});
	
	// 年の選択
	$('#cal-year').change(function() {
		// Calender
		setNoy = Number($(this).val()); // 年
		$('.days').remove(); // 前回の表示削除
		const calHtml = myCalender(setNoy, setNom, setNod); // Calender関数実行
		$('#cal-dsp').append(calHtml);
		
		// Format
		cdt.y = setNoy; // 年
		cdt.w = $('.today')[0].cellIndex; // 曜日の更新
		cdt.d = Number($('.today').text()); // 今日の設定
		refFormat(cdt, time); // select要素に挿入
	});
	
	// 月の選択
	$('#cal-month').change(function() {
		// Calender
		setNom = Number($(this).val()); // 月
		$('.days').remove(); // 前回の表示削除
		const calHtml = myCalender(setNoy, setNom, setNod); // Calender関数実行
		$('#cal-dsp').append(calHtml);
		
		// Format
		cdt.m = setNom - 1; // 月
		cdt.w = $('.today')[0].cellIndex; // 曜日の更新
		cdt.d =  Number($('.today').text()); // 今日の設定
		refFormat(cdt, time); // select要素に挿入
	});
	
	// Refresh
	$('#dcdt-ref').click(function() {
		// Calender
		cdt =  getCdt(); // 最新の日付と時刻
		setNoy = cdt.y; // 年
		setNom = cdt.m + 1; // 月
		setNod = cdt.d // 日
		$('.days').remove(); // 前回の表示削除
		const calHtml = myCalender(setNoy, setNom, setNod); // Calender関数実行
		$('#cal-dsp').append(calHtml);
		$('#cal-year').val(setNoy);
		$('#cal-month').val(setNom);
		
		// Format
		refFormat(cdt, time); // select要素に挿入
	});
	
	// Hide Time
	$('#dsp-time').change(function() {
		if (time === true) {
			time = false;
		} else {
			time = true;
		}
		// Format
		refFormat(cdt, time); // select要素に挿入
	});
	
	// Copy
	$('#dcdt-cpy').click(function() {
		navigator.clipboard.writeText(dcdtSelect.val());
	});
	
	// Small Window
	$('#sw-btn').click(function() {
		window.open('index.html', 'dcdtsw', 'width=320, height=568');
	});
});
