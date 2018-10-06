
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    // Template Imports
    import src_containers_PostList from '../src/containers/PostList'
import src_containers_Post from '../src/containers/Post'
import src_containers_404 from '../src/containers/404'

    // Template Map
    const templateMap = {
      t_0: src_containers_PostList,
t_1: src_containers_Post,
t_2: src_containers_404
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_2"},"2013":{c:{"10":{c:{"23":{c:{"floor_and_truncate":{t:"t_1"}}},"25":{c:{"return_value_of_method_and_block":{t:"t_1"}}}}},"11":{c:{"25":{c:{"user_define_method":{t:"t_1"}}}}},"12":{c:{"18":{c:{"ruby_gold":{t:"t_1"}}}}},"01":{c:{"16":{c:{"char_code":{t:"t_1"}}},"18":{c:{"coffee_meeting":{t:"t_1"}}},"31":{c:{"linefeeds":{t:"t_1"}}},"06":{c:{"rest_of_pocket":{t:"t_1"}}},"09":{c:{"learning_java":{t:"t_1"}}}}},"02":{c:{"21":{c:{"archive_gmail":{t:"t_1"}}},"24":{c:{"sublime_bracket_highlighter":{t:"t_1"}}}}},"04":{c:{"15":{c:{"order_of_select_sql":{t:"t_1"}}},"20":{c:{"css_in_rails":{t:"t_1"}}},"24":{c:{"action_mailer":{t:"t_1"}}},"25":{c:{"source_of_image_tag":{t:"t_1"}}},"03":{c:{"cakephp_charcode":{t:"t_1"}}}}},"05":{c:{"16":{c:{"css_position":{t:"t_1"}}},"18":{c:{"one_liners":{t:"t_1"}}},"23":{c:{"gem_command":{t:"t_1"}}},"25":{c:{"daily_report_git":{t:"t_1"}}}}},"06":{c:{"20":{c:{"crontab":{t:"t_1"}}},"25":{c:{"regex_options":{t:"t_1"}}},"27":{c:{"minitsuku2":{t:"t_1"}}}}},"07":{c:{"11":{c:{"ruby_silver":{t:"t_1"}}},"20":{c:{"install_sublime3":{t:"t_1"}}}}},"08":{c:{"26":{c:{"undef_class_method":{t:"t_1"}}},"27":{c:{"uploadify":{t:"t_1"}}}}},"09":{c:{"04":{c:{"windows_files":{t:"t_1"}}}}}}},"2014":{c:{"01":{c:{"30":{c:{"sublime_indent":{t:"t_1"}}}}},"02":{c:{"16":{c:{"windows_alias":{t:"t_1"}}}}}}},"2015":{c:{"11":{c:{"08":{c:{"ctrlp":{t:"t_1"}}}}},"12":{c:{"27":{c:{"git-delete-merged":{t:"t_1"}}}}},"05":{c:{"01":{c:{"ruby-define-const-in-method":{t:"t_1"}}},"04":{c:{"rubygem_global":{t:"t_1"}}}}}}},"2016":{c:{"10":{c:{"27":{c:{"rorororor":{t:"t_1"}}}}},"12":{c:{"30":{c:{"devise-friendly-forwarding":{t:"t_1"}}}}},"01":{c:{"08":{c:{"vimagit":{t:"t_1"}}}}},"05":{c:{"06":{c:{"rake_rspec":{t:"t_1"}}}}},"09":{c:{"20":{c:{"jekyll_to_middleman":{t:"t_1"}}}}}}},"2017":{c:{"12":{c:{"17":{c:{"amazon-vpc":{t:"t_1"}}}}},"02":{c:{"14":{c:{"kamakura-kaihatsu-gassyuku":{t:"t_1"}}}}},"05":{c:{"27":{c:{"elixir-introduction":{t:"t_1"}}}}},"07":{c:{"06":{c:{"docker-compose-rails":{t:"t_1"}}}}}}},"2018":{c:{"10":{c:{"06":{c:{"amp-complete":{t:"t_1"}}}}},"01":{c:{"22":{c:{"react-static":{t:"t_1"}}}}},"06":{c:{"22":{c:{"open-uri-use-tempfile":{t:"t_1"}}},"08":{c:{"aws-codedeploy-notification":{t:"t_1"}}}}}}},"/":{t:"t_0"},"p2":{t:"t_0"},"p3":{t:"t_0"},"p4":{t:"t_0"},"p5":{t:"t_0"},"tags":{c:{"amp":{t:"t_0"},"aws":{t:"t_0"},"blog":{t:"t_0"},"css":{t:"t_0"},"deeplearning":{t:"t_0"},"devise":{t:"t_0"},"docker":{t:"t_0"},"elixir":{t:"t_0"},"encoding":{t:"t_0"},"erlang":{t:"t_0"},"git":{t:"t_0"},"java":{t:"t_0"},"javascript":{t:"t_0"},"jekyll":{t:"t_0"},"jquery":{t:"t_0"},"linux":{t:"t_0"},"lt":{t:"t_0"},"middleman":{t:"t_0"},"php":{t:"t_0"},"python":{t:"t_0"},"rails":{t:"t_0"},"rake":{t:"t_0"},"react-static":{t:"t_0"},"react":{t:"t_0"},"redux":{t:"t_0"},"regex":{t:"t_0"},"relay":{t:"t_0"},"rspec":{t:"t_0"},"ruby":{t:"t_0",c:{"p2":{t:"t_0"}}},"security":{t:"t_0"},"service":{t:"t_0"},"sql":{t:"t_0"},"sublime_text":{t:"t_0"},"tensorflow":{t:"t_0"},"vim":{t:"t_0"},"vpc":{t:"t_0"},"windows":{t:"t_0"}}}}}

    // Get template for given path
    const getComponentForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }

    export default class Routes extends Component {
      render () {
        const { component: Comp, render, children } = this.props
        const renderProps = {
          templateMap,
          templateTree,
          getComponentForPath
        }
        if (Comp) {
          return (
            <Comp
              {...renderProps}
            />
          )
        }
        if (render || children) {
          return (render || children)(renderProps)
        }

        // This is the default auto-routing renderer
        return (
          <Route path='*' render={props => {
            let Comp = getComponentForPath(props.location.pathname)
            if (!Comp) {
              Comp = getComponentForPath('404')
            }
            return Comp && <Comp {...props} />
          }} />
        )
      }
    }
  