class FactorialsController < ApplicationController
    def factorial
        @number = params[:input][:number]
        @result = `python factorial.py #{@number}`
        render json: @result
    end
end
