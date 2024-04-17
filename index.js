tippy('.material-symbols-outlined', {
    content: 'Gross annual income is your total salary in a year before any deductions',
  });

  $(document).ready(function(){
    // Hide error icons by default
    $('.invalid-feedback').hide();

    $('#calculate').click(function(){
        // Get form values
        let age = $('#age').val();
        let income = parseFloat($('#income').val());
        let extraIncome = parseFloat($('#extraIncome').val() || 0);
        let deductions = parseFloat($('#deductions').val() || 0);

        // Validate form values
        let valid = true;

        if(isNaN(income)){
            $('#income').addClass('is-invalid');
            valid = false;
        } else {
            $('#income').removeClass('is-invalid');
        }

        if(isNaN(extraIncome)){
            $('#extraIncome').addClass('is-invalid');
            valid = false;
        } else {
            $('#extraIncome').removeClass('is-invalid');
        }

        if(isNaN(deductions)){
            $('#deductions').addClass('is-invalid');
            valid = false;
        } else {
            $('#deductions').removeClass('is-invalid');
        }

        if(valid){
            let totalIncome = income + extraIncome - deductions;
            let tax = 0;

            if(totalIncome > 8){
                switch(age){
                    case '<40':
                        tax = 0.3 * (totalIncome - 8);
                        break;
                    case '>=40&<60':
                        tax = 0.4 * (totalIncome - 8);
                        break;
                    case '>=60':
                        tax = 0.1 * (totalIncome - 8);
                        break;
                }
            }

            $('#taxAmount').text(`Tax Amount: ${tax.toFixed(2)} Lakhs`);
            $('#resultModal').modal('show');
        }
    });

    // Show error icons on invalid fields
    $('input, select').blur(function(){
        if($(this).is(':invalid')){
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    });
});
$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();
});