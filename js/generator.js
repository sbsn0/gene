window.addEventListener("load", function (event) {
    // today
    var now = new Date();
    var yyyy = now.getFullYear();
    var mm = now.getMonth() + 1;
    var dd = now.getDate();

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (dd < 10) {
        dd = '0' + dd;
    }
    $('#date').val(yyyy + '-' + mm + '-' + dd);

    $('#syaku').hide();

    $('#clear').click(function () {
        $('#touha').val('');
        $('#no').val('');
        $('#toukou').val('');
        $('#mei').val('');
        $('#age').val('');
        $('input[name=part]').val(['']);
        $('#kind').val('');
        $('#hatyou').val('');
        $('#zentyou').val('');
        $('#sori').val('');
        $('#hatyou_syaku').val('');
        $('#hatyou_sun').val('');
        $('#hatyou_bu').val('');
        $('#zentyou_syaku').val('');
        $('#zentyou_sun').val('');
        $('#zentyou_bu').val('');
        $('#sori_syaku').val('');
        $('#sori_sun').val('');
        $('#sori_bu').val('');
        $('#nakago').val('');
        $('#suriage').val('');
        $('#mekugi').val('');
        $('#kissaki').val('');
        $('#zigane').val('');
        $('#bousi').val('');
        $('#hamon_notare').prop('checked', false);
        $('#hamon_suguha').prop('checked', false);
        $('#hamon_gonome').prop('checked', false);
        $('#hamon_tyouzi').prop('checked', false);
        $('#hamon_hitutare').prop('checked', false);
    })

    $('#switch').change(function () {
        if ($('#switch:checked').val()) {
            $('#syaku').hide();
            $('#cm').show();
        } else {
            $('#syaku').show();
            $('#cm').hide();
        }
    })

    $('#go').click(function () {
        var info = mkText();
        $('#resultData').val(info);
    })

    $('#getResultData').click(function () {
        var clipboard = new Clipboard('.getBtn');
        clipboard.on('success', function (e) {
            //成功時の処理 nope.
        });
        clipboard.on('error', function (e) {
            //失敗時の処理
            alert('コピーに失敗しました。')
        });
    })

}, false);

function mkText() {
    var ret;
    var dateInfo = $('#date').val();
    var placeInfo = $('#place').val();
    var touhaInfo = $('#touha').val();
    var noInfo = $('#no').val();
    var toukouInfo = $('#toukou').val();
    var meiInfo = $('#mei').val();
    var ageInfo = $('#age').val();
    var partInfo = $('input[name=part]:checked').val();
    var kindInfo = $('#kind').val();
    var hatyouInfo = $('#hatyou').val();
    var zentyouInfo = $('#zentyou').val();
    var soriInfo = $('#sori').val();
    var hatyouSyakuInfo = '';
    if ($('#hatyou_syaku').val() !== '' && $('#hatyou_syaku').val() > 0) {
        hatyouSyakuInfo = $('#hatyou_syaku').val() + '尺';
    }
    if ($('#hatyou_sun').val() !== '' && $('#hatyou_sun').val() > 0) {
        hatyouSyakuInfo = hatyouSyakuInfo + $('#hatyou_sun').val() + '寸';
    }
    if ($('#hatyou_bu').val() !== '' && $('#hatyou_bu').val() > 0) {
        hatyouSyakuInfo = hatyouSyakuInfo + $('#hatyou_bu').val() + '分';
    }
    var zentyouSyakuInfo = '';
    if ($('#zentyou_syaku').val() !== '' && $('#zentyou_syaku').val() > 0) {
        zentyouSyakuInfo = $('#zentyou_syaku').val() + '尺';
    }
    if ($('#zentyou_sun').val() !== '' && $('#zentyou_sun').val() > 0) {
        zentyouSyakuInfo = zentyouSyakuInfo + $('#zentyou_sun').val() + '寸';
    }
    if ($('#zentyou_bu').val() !== '' && $('#zentyou_bu').val() > 0) {
        zentyouSyakuInfo = zentyouSyakuInfo + $('#zentyou_bu').val() + '分';
    }
    var soriSyakuInfo = '';
    if ($('#sori_syaku').val() !== '' && $('#sori_syaku').val() > 0) {
        soriSyakuInfo = $('#sori_syaku').val() + '尺';
    }
    if ($('#sori_sun').val() !== '' && $('#sori_sun').val() > 0) {
        soriSyakuInfo = soriSyakuInfo + $('#sori_sun').val() + '寸';
    }
    if ($('#sori_bu').val() !== '' && $('#sori_bu').val() > 0) {
        soriSyakuInfo = soriSyakuInfo + $('#sori_bu').val() + '分';
    }
    var nakagoInfo = $('#nakago').val();
    var suriageInfo = $('#suriage').val();
    var mekugiInfo = $('#mekugi').val();
    var kissakiInfo = $('#kissaki').val();
    var ziganeInfo = $('#zigane').val();
    var bousiInfo = $('#bousi').val();
    var notareInfo = $('#hamon_notare:checked').val();
    var suguhaInfo = $('#hamon_suguha:checked').val();
    var gonomeInfo = $('#hamon_gonome:checked').val();
    var tyouziInfo = $('#hamon_tyouzi:checked').val();
    var hitutareInfo = $('#hamon_hitutare:checked').val();

    ret = '鑑賞日：' + dateInfo + '\n';
    ret = ret + '施設名：' + placeInfo + '\n';
    ret = ret + '番号：' + noInfo + '\n';
    ret = ret + '刀派：' + touhaInfo + '\n';
    ret = ret + '刀工：' + toukouInfo + '\n';
    ret = ret + '銘：' + meiInfo + '\n';
    ret = ret + '年代：' + ageInfo + partInfo + '\n';
    ret = ret + '種類：' + kindInfo + '\n';
    if ($('#switch:checked').val()) {
        ret = ret + '刃長：' + hatyouInfo + 'cm\n';
        ret = ret + '全長：' + zentyouInfo + 'cm\n';
        ret = ret + '反り：' + soriInfo + 'cm\n';
    } else {
        ret = ret + '刃長：' + hatyouSyakuInfo + '\n';
        ret = ret + '全長：' + zentyouSyakuInfo + '\n';
        ret = ret + '反り：' + soriSyakuInfo + '\n';
    }
    ret = ret + '茎：' + nakagoInfo + '\n';
    ret = ret + '磨上：' + suriageInfo + '\n';
    ret = ret + '目釘孔：' + mekugiInfo + '個\n';
    ret = ret + '切っ先：' + kissakiInfo + '\n';
    ret = ret + '地鉄：' + ziganeInfo + '\n';
    ret = ret + '帽子：' + bousiInfo + '\n';

    var hamonInfo = '';
    if (notareInfo) {
        hamonInfo = notareInfo;
    }
    if (suguhaInfo) {
        hamonInfo = getCommna(hamonInfo);
        hamonInfo = hamonInfo + suguhaInfo;
    }
    if (gonomeInfo) {
        hamonInfo = getCommna(hamonInfo);
        hamonInfo = hamonInfo + gonomeInfo;
    }
    if (tyouziInfo) {
        hamonInfo = getCommna(hamonInfo);
        hamonInfo = hamonInfo + tyouziInfo;
    }
    if (hitutareInfo) {
        hamonInfo = getCommna(hamonInfo);
        hamonInfo = hamonInfo + hitutareInfo;
    }
    ret = ret + '刃文：' + hamonInfo + '\n';

    return ret;

}

function getCommna(str) {
    if (str.length !== 0) {
        str = str + '　'
    }
    return str;
}
